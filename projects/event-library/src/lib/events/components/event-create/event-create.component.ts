import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EventCreateService } from './../../services/event-create/event-create.service';
import { EventDetailService } from './../../services/event-detail/event-detail.service';
import{ labelMessages } from './../labels'
import { Router } from '@angular/router'
import { Location } from '@angular/common'
import { SbToastService } from '../../services/iziToast/izitoast.service';

@Component({
  selector: 'sb-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventCreateComponent implements OnInit {

  labelMessages = labelMessages;
  @Input() formFieldProperties: any
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventCreateService: EventCreateService,
    private eventDetailService: EventDetailService,
    private router: Router,
    private location: Location,
    private sbToastService: SbToastService,
    private formBuilder: FormBuilder) {
    }
    
    customFields = this.formBuilder.group({
      startDate:[] = this.todayDate,
      endDate:[] = this.todayDate,
      startTime:[]= this.today.getHours() + ":" + this.today.getMinutes(),
      endTime: []  = (this.today.getHours() + 1) + ":" + this.today.getMinutes(),
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
      this.eventDetailService.getEvent().subscribe((data: any) => {
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
      this.formValues["startDate"] = this.customFields.value.startDate;
      this.formValues["startTime"] = this.customFields.value.startTime;
      this.formValues["endDate"] = this.customFields.value.endDate;
      this.formValues["endTime"] = this.customFields.value.endTime;
      this.formValues["registrationStartDate"] = this.customFields.value.registrationStartDate;
      this.formValues["registrationEndDate"] = this.customFields.value.registrationEndDate;  
     
      if( this.queryParams.identifier) {
        this.formValues["identifier"] =  this.queryParams.identifier;
      }
        this.eventCreateService.saveEvent(this.formValues);
    }
  }

  Cancel() {
     this.location.back()
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
}

