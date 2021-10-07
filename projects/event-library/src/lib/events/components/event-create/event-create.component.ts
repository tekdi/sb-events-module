import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventCreateService } from './../../services/event-create/event-create.service';
import { EventDetailService } from './../../services/event-detail/event-detail.service';
import { EventService } from '../../services/event/event.service'
import{ labelMessages } from './../labels'
import { Router } from '@angular/router'
import { Location } from '@angular/common'
import { SbToastService } from '../../services/iziToast/izitoast.service';
import { UserConfigService } from '../../services/userConfig/user-config.service';
import { ImageSearchService } from '../../services/image-search/image-search.service';
import { TimezoneCal } from '../../services/timezone/timezone.service';
import * as _ from 'lodash-es';
@Component({
  selector: 'sb-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventCreateComponent implements OnInit {

  @Output() navAfterSave = new EventEmitter();

  labelMessages = labelMessages;
  @Input() formFieldProperties: any;
  @Input() userId: any;
  today = new Date();
  todayDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + this.today.getDate()).slice(-2);
  formValues: any;
  startDate: any = this.todayDate;
  endDate: any = this.todayDate;
  startTime: any = this.today.getHours() + ":" + this.today.getMinutes();
  endTime: any  = (this.today.getHours() + 1) + ":" + this.today.getMinutes();
  registrationStartDate: any = this.todayDate;
  registrationEndDate: any = this.todayDate;
  timeDiff: any;
  queryParams: any;
  eventDetailsForm: any;
  isSubmitted = false;
  formFieldData: any;
  FormData: any;
  isNew:boolean= true;
  eventValue: any;
  offset = this.timezoneCal.getTimeOffset();

  public showAppIcon = true;
  public appIconConfig = {
      code: "appIcon",
      dataType: "text",
      description: "appIcon of the content",
      editable: true,
      inputType: "appIcon",
      label: "Icon",
      name: "Icon",
      placeholder: "Icon",
      renderingHints: {class: "sb-g-col-lg-1 required"},
      required: true,
      visible: true
}
  public appIcon="";
  editmode : any;
  public showImagePicker = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventCreateService: EventCreateService,
    private eventDetailService: EventDetailService,
    private eventService: EventService,
    private router: Router,
    private location: Location,
    private sbToastService: SbToastService,
    private formBuilder: FormBuilder,
    private userConfigService: UserConfigService,
    private imageSearchService : ImageSearchService,
    private timezoneCal: TimezoneCal) {
    }
    
    customFields = this.formBuilder.group({
      startDate:[] = this.todayDate,
      endDate:[] = this.todayDate,
      startTime:[] = (('0' + (this.today.getHours() + 1))).slice(-2) + ":" + ('0' + this.today.getMinutes()).slice(-2) + ":" + ('0' + this.today.getSeconds()).slice(-2),
      endTime:[] = (('0' + (this.today.getHours() + 2))).slice(-2) + ":" + ('0' + this.today.getMinutes()).slice(-2) + ":" + ('0' + this.today.getSeconds()).slice(-2),
      registrationStartDate: [] = this.todayDate,
      registrationEndDate: [] = this.todayDate,
  
    });

  ngOnInit() {
    
    this.activatedRoute.queryParams.subscribe((params) => {
      this.queryParams = params;
      if(this.queryParams.identifier) {
        this.isNew = false;
      }
    });
    if(this.queryParams.identifier) {
      this.eventCreateService.getEventFormConfig().subscribe((data: any) => {
        this.formFieldProperties = data.result['form'].data.fields;
      });
      this.eventDetailService.getEvent(this.queryParams.identifier).subscribe((data: any) => {
        this.queryParams = data.result.content;
      },
        (err: any) => {
          console.log('err = ', err);
        });
    }
    if(this.queryParams.identifier) {
      setTimeout(() =>
    this.initializeFormFields(), 500);
    }

    let group={}  

  //   this.customFieldsForm.forEach(field=>{
  //     group[field['code']]=new FormControl(''); 
  //   })
    
  //   this.myFormGroup = new FormGroup(group);

  //   this.myFormGroup.valueChanges.subscribe(val=>{
  //  })
  }
  initializeFormFields() {
    this.formFieldProperties.forEach(formField => {
      if( formField.code in this.queryParams){
          formField.default = this.queryParams[formField.code];
      } 
    });
    this.formFieldData = this.formFieldProperties;
    this.formValues = this.formFieldData;
  }

  valueChanges(eventData) {
    this.FormData = eventData;
    if (eventData) {
      this.formValues = eventData;
    }
  }

  /**
   * For validate data and call post form service
   */
  postData() {
    this.isSubmitted = true;
      this.formValues["startDate"] = this.customFields.value.startDate;
      this.formValues["startTime"] = this.customFields.value.startTime + this.offset;
      this.formValues["endDate"] = this.customFields.value.endDate;
      this.formValues["endTime"] = this.customFields.value.endTime + this.offset;
      this.formValues["registrationStartDate"] = this.customFields.value.registrationStartDate;
      this.formValues["registrationEndDate"] = this.customFields.value.registrationEndDate;  
      this.formValues['owner'] = this.userId;

    console.log(this.formValues);
    if (this.formValues == undefined) {
      this.sbToastService.showIziToastMsg("Please enter event name", 'warning');
    } else if (this.formValues.name == undefined || this.formValues.name.trim() == "") {
      this.sbToastService.showIziToastMsg("Please enter event name", 'warning');
    } else if ( this.formValues.startDate == undefined || this.formValues.startTime == undefined || !this.timeValidation( this.formValues.startDate, this.formValues.startTime)) {
      this.sbToastService.showIziToastMsg("Please enter valid event start date and time", 'warning');
    } else if (this.formValues.endDate == undefined || this.formValues.endTime == undefined || !this.timeValidation(this.formValues.endDate, this.formValues.endTime)) {
      this.sbToastService.showIziToastMsg("Please enter valid event end date and time", 'warning');

    } else if (this.registrationStartDate == undefined) {
      this.sbToastService.showIziToastMsg("Please enter valid event registration start date", 'warning');

    } else if (this.registrationEndDate == undefined) {
      this.sbToastService.showIziToastMsg("Please enter valid registration end date", 'warning');

    } else if (!this.dateValidation(this.startDate + " " + this.startTime, this.endDate + " " + this.endTime)) {
      this.sbToastService.showIziToastMsg("Event end date should be greater than start date", 'warning');

    } else if (!this.dateValidation(this.registrationStartDate, this.registrationEndDate)) {
      this.sbToastService.showIziToastMsg("Registration end date should be greater than start date", 'warning');
    } 
    else {
     
      if( this.queryParams.identifier) {
        this.formValues["identifier"] =  this.queryParams.identifier;
      }
      // this.eventCreateService.saveEvent(this.formValues);

        this.eventCreateService.createEvent(this.formValues).subscribe((data) => {
          if (data.responseCode == "OK") 
          {
            this.dataSubmitted(data, 'create');
          }
        }, (err: any) => {
          console.log( "Errr, " ,err);
          this.sbToastService.showIziToastMsg(err.message, 'error');
        });
    }
  }

  dataSubmitted(data, task) {
      this.eventCreateService.publishEvent(data.result.identifier).subscribe((res) => {
        
        if (task == 'create')
        {
          this.sbToastService.showIziToastMsg("Event Created Successfully", 'success');
        }
        else
        {
          this.sbToastService.showIziToastMsg("Event updated Successfully", 'success');
        }

        // Only publish event can able to create batch
        this.createEventBatch(data);
        
        this.navAfterSave.emit(data);
      });
  }

  /**
   * NOTE: Once the event is created, the batch will be created automatically.
   * Right now the batch is not created after event creating, so we are implementing some temporary solution
   * 
   * Create event batch 
   * Here, confirm that one event have only one batch.
   * @param data array of created event id
   * @param formValue event form value
   */
  createEventBatch(data)
  {
      // Check whether Event has batch or not
      // filter set for serch batch for selected event
      let filters ={
          "courseId": data.result.identifier,
          "enrollmentType": "open"
       };

      this.eventDetailService.getEvent(data.result.identifier).subscribe((response: any) => {
        this.eventValue = response.result.event;

        // request value for create batch for selected event
        let createBatchRequestValue = {
          "courseId": data.result.identifier,
          "name": "Batch for event - " + data.result.identifier,
          "description": "Batch for event - " + data.result.identifier,
          "enrollmentType": "open",
          "startDate": this.eventValue.startDate,
          "enddate": this.eventValue.endDate,
          "enrollmentEndDate":this.eventValue.registrationEndDate,
          "createdBy" : this.eventValue.owner
        }

        this.eventService.getBatches(filters).subscribe((res) => {
          if (res.responseCode == "OK") 
          {
              if (res.result.response.count == 0)
              {
                // If batch not created then create the batch for event
                this.eventService.createBatch(createBatchRequestValue).subscribe((createRes) => {
                  console.log('Batch Created :: ', createRes);
                });
              }
              else
              {
                console.log("Batch is already created to this event");
              }
          }
        });
      });
  }

  Cancel()
  {
     this.router.navigate(['/demo']);
  }

  /**
   * For time validation
   * 
   * @param sdate Contains data
   * @param time Contains time
   * @returns Return true if event start time is greater current time
   */
  timeValidation(date, time) {
    var startEventTime = new Date(date + " " + time);
    var startDifference = startEventTime.getTime() - this.today.getTime();
    var timeDiff = Math.round(startDifference / 60000);

    return (timeDiff > 0) ? true : false;
  }

  /**
   * For date validation
   * 
   * @param sdate Contains start data
   * @param edate Contains end data
   * @returns 
   */
  dateValidation(sdate, edate) {
    var startEventDate = new Date(sdate);
    var endEventDate = new Date(edate);

    var startDifference = endEventDate.getTime() - startEventDate.getTime();
    var timeDiff = Math.round(startDifference / 60000);

    return (timeDiff >= 0) ? true : false;
  }

  // onSubmit(){
  //   console.log(this.myFormGroup.controls.name.value);
  // }

  ngOnChanges()
  {
    this.setAppIconData();
  }

  setAppIconData()
  {
    const isRootNode = true;
    this.appIcon="";
    if (this.isReviewMode()) {
      this.appIconConfig = {...this.appIconConfig , ... {isAppIconEditable: false}};
    } else {
      this.appIconConfig = {...this.appIconConfig , ... {isAppIconEditable: true}};
    }
  }

  isReviewMode()
  {
    this.imageSearchService.getEditMode().subscribe((data: any) => {
    this.editmode = data.d.edit;
    });
    
    return  _.includes(['read', 'sourcingreview'], this.editmode);
  }

  appIconDataHandler(event)
  {
    this.appIcon = event.url;
  }  
}

