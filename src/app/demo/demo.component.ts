import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { EventListService } from "../../../projects/event-library/src/lib/events/services/event-list/event-list.service";
import { EventCreateService } from "../../../projects/event-library/src/lib/events/services/event-create/event-create.service";
import { EventDetailService } from "./../../../projects/event-library/src/lib/events/services/event-detail/event-detail.service";

import { Router, ActivatedRoute } from "@angular/router";

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
  CalendarEventTitleFormatter,
} from "angular-calendar";
import { colors } from "./../eventcolor";
import { MyCalendarEvent } from "projects/event-library/src/lib/events/interfaces/calendarEvent.interface";
import { SbToastService } from '../../../projects/event-library/src/lib/events/services/iziToast/izitoast.service';
@Component({
  selector: "app-demo",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"],
})
export class DemoComponent implements OnInit {
  colors = colors;
  filterConfig: any;

  eventList: any;
  myEvents: any;
  eventItem: any;
  tab: string = "list";
  userId: any = "1001";
  formFieldProperties: any;
  isLoading: boolean = true;
  eventCalender: any;
  events: MyCalendarEvent[];
  Filterdata :any;
  query:any;
  calendarEvents :any;
  dates:any;
  min:any;
  max:any;
  today = new Date();
  todayDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + (this.today.getDate())).slice(-2);
  yesterdayDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + (this.today.getDate()-1)).slice(-2);
  tommorrowDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + (this.today.getDate()+1)).slice(-2);

  p: number = 1;
  eventIdentifier = 'do_11322166143296307218';
  collection: any[];

  constructor(
    private eventListService:EventListService,
    private eventCreateService: EventCreateService,
    private eventDetailService: EventDetailService,
    private router: Router,
    private sbToastService: SbToastService)
    {}

  ngOnInit() {
    this.showEventListPage();
    this.showEventCreatePage();
    this.showFilters();
    this.showCalenderEvent();
  }

   /* For get List of events
   */
   showEventListPage()
   {
      this.Filterdata = {
      "status":["live"],
      "objectType": "Event"
      };
      
      this.eventListService.getEventList(this.Filterdata).subscribe((data:any)=>{
      this.eventList = data.result.Event;
      this.isLoading = false;
    });
  }
  /**
   * For subscibe click action on event card
   */
   navToEventDetail(event){
    this.router.navigate(['/play/event-detail'], {
      queryParams: {
        identifier: event.identifier
      }
    });

    console.log('Demo Component - ', event.identifier);
  }

  Openview(view)
  {
    this.isLoading = true;
    if (view == 'list') 
    {
      this.tab = 'list';
    } 
    else if (view == 'detail') 
    {
      this.tab = 'detail';
    }
    else if (view == 'enrollUsersList')
    {
      this.router.navigate(['/enroll-users'], {
        queryParams: {
          identifier: this.eventIdentifier
        }
      });
    } 
    else if (view == 'calender') 
    {
      this.tab = 'calender';
      //this.router.navigate(['/calender']);
    }
    else 
    {
      this.router.navigate(['/form'], {
        queryParams: {
          // identifier: event.identifier
        }
      });
    }
    
    this.isLoading = false;
  }

  showEventCreatePage() {
    this.eventCreateService.getEventFormConfig().subscribe((data: any) => {
      this.formFieldProperties = data.result["form"].data.fields;
      this.isLoading = false;

      console.log(data.result["form"].data.fields);
    });
  }

  cancel() {
    //this.router.navigate(['/home']);
  }

  navAfterSave(res) {
    //alert(res.result.identifier);
    this.eventDetailService.getEvent(res.result.identifier).subscribe(
      (data: any) => {
        this.eventItem = data.result.event;
        this.tab = "detail";
        this.isLoading = false;

        console.log(this.eventItem);
      },
      (err: any) => {
        console.log("err = ", err);
      }
    );
  }

  showCalenderEvent() {
    this.eventListService.getCalenderlist().subscribe((data: any) => {
      this.eventCalender = data.result.content;

      this.events = this.eventCalender.map((obj) => ({
        start: new Date(obj.startDate),
        title: obj.name,
        starttime: obj.startTime,
        end: new Date(obj.endDate),
        color: colors.red,
        cssClass: obj.color,
        status: obj.status,
        onlineProvider: obj.onlineProvider,
        audience: obj.audience,
        owner: obj.owner,
        identifier: "do_11322182566085427211",
      }));
    });
  }

  showFilters() {
    this.eventListService.getFilterFormConfig().subscribe((data: any) => {
      this.filterConfig = data.result['form'].data.fields;
      this.isLoading = false;
    },
    (err: any) => {
      console.log('err = ', err);
    });
  }

  getFilteredData(event)
  {
    if(event.search)
    {
      this.Filterdata ={
        "status":["live"],
        "objectType": "Event",
      };
      this.query=event.target.value;
    }
    else if((event.filtersSelected.eventTime) && (event.filtersSelected.eventType))
    {
      switch (event.filtersSelected.eventTime) {
        case "Past":
          this.dates={ 
            "max":this.yesterdayDate
          }
            break;
        case "Upcoming":
          this.dates={ 
            "min":this.tommorrowDate
          }
            break;
        default:
          this.dates={ 
            "min":this.todayDate,
            "max":this.todayDate
          }
              break;
      } 
      this.Filterdata ={
        "status":["live"],
        "eventType" :event.filtersSelected.eventType,
        "startDate":this.dates,
        "objectType": "Event"
      };
    }
    else if(event.filtersSelected.eventType)
    {
        this.Filterdata ={
          "status":["live"],
          "eventType" :event.filtersSelected.eventType,
          "objectType": "Event"
        };
    }
    else if(event.filtersSelected.eventTime)
    { 
        switch (event.filtersSelected.eventTime) {
          case "Past":
            this.dates={ 
              "max":this.yesterdayDate
            }
              break;
          case "Upcoming":
            this.dates={ 
              "min":this.tommorrowDate
            }
              break;
          default:
            this.dates={ 
              "min":this.todayDate,
              "max":this.todayDate
            }
          break;
        } 
        this.Filterdata ={
          "status":["live"],
          "startDate" :this.dates,
          "objectType": "Event"
        };
    }
    else
    {
      this.Filterdata ={
        "status":["live"],
        "objectType": "Event"
      };
    }

    // Loader code
    this.tab == "list" ? this.isLoading = true : this.isLoading = false;

    this.eventListService.getEventList(this.Filterdata,this.query).subscribe((data) => {
      if (data.responseCode == "OK") 
        {
          this.isLoading=false;
          this.eventList = data.result.Event;

          // For calendar events
          this.events = this.eventList.map(obj => ({
          start: new Date(obj.startDate),
          title: obj.name,
          starttime: obj.startTime,
          end: new Date(obj.endDate),
          color: colors.red,
          cssClass: obj.color,
          status: obj.status,
          onlineProvider: obj.onlineProvider,
          audience: obj.audience,
          owner: obj.owner,
          identifier:obj.identifier,
          }));
        }
      }, (err) => {
        this.isLoading=false;
        this.sbToastService.showIziToastMsg(err.error.result.messages[0], 'error');
      });
  }
}
