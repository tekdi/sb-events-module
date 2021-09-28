import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { EventListService } from "../../../projects/event-library/src/lib/events/services/event-list/event-list.service";
import { EventCreateService } from "../../../projects/event-library/src/lib/events/services/event-create/event-create.service";
import { EventDetailService } from "./../../../projects/event-library/src/lib/events/services/event-detail/event-detail.service";
import { EventFilterService } from './../../../projects/event-library/src/lib/events/services/event-filters/event-filters.service';
import { Router, ActivatedRoute } from "@angular/router";
import { SbToastService } from '../../../projects/event-library/src/lib/events/services/iziToast/izitoast.service';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
  CalendarEventTitleFormatter,
} from "angular-calendar";
import { colors } from "./../eventcolor";
import { MyCalendarEvent } from "projects/event-library/src/lib/events/interfaces/calendarEvent.interface";

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
  eventItem: any;
  tab: string = "list";
  userId: any = "1001";
  formFieldProperties: any;
  isLoading: boolean = true;
  eventCalender: any;
  events: MyCalendarEvent[];
  p: number = 1;
  collection: any[];
  Filterdata :any;
  calendarEvents :any;

  constructor(
    private eventListService: EventListService,
    private eventCreateService: EventCreateService,
    private eventDetailService: EventDetailService,
    private router: Router,
    private eventFilterService: EventFilterService,
    private sbToastService: SbToastService
  ) { }

  ngOnInit() {
    this.showEventListPage();
    this.showEventCreatePage();
    this.showCalenderEvent();
    this.showFilters();
  }

  /**
   * For get List of events
   */
  showEventListPage() {
    this.eventListService.getEventList().subscribe((data: any) => {
      this.eventList = data.result.content;
      this.isLoading = false;
    });
  }

  /**
   * For subscibe click action on event card
   */
  navToEventDetail(res) {
    this.eventItem = res;
    this.tab = "detail";
  }

  Openview(view)
  {
    this.isLoading = true;
    if (view == "list") {
      this.tab = "list";
    } else if (view == "detail") {
      this.tab = "detail";
    } else if (view == "calender") {
      this.tab = "calender";
    } else {
    this.router.navigate(['/form'], {
      queryParams: {}
    });
    }
    this.isLoading = false;
  }

  showEventCreatePage() {
    this.eventCreateService.getEventFormConfig().subscribe((data: any) => {
      this.formFieldProperties = data.result["form"].data.fields;
      this.isLoading = false;
    });
  }

  cancel()
  {
    this.router.navigate(['/home']);
  }

  navAfterSave(res) {
    this.eventDetailService.getEvent(res.result.identifier).subscribe(
      (data: any) => {
        this.eventItem = data.result.event;
        this.tab = "detail";
        this.isLoading = false;
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
    this.eventFilterService.getFilterFormConfig().subscribe((data: any) => {
      this.filterConfig = data.result['form'].data.fields;
      this.isLoading = false;
    },
    (err: any) => {
      console.log('err = ', err);
    });
  }

  getSearchData(event)
  {
    let filters ={
      "status":[],
      "objectType": "Event"
    };
    this.eventFilterService.getfilterSeachData(filters,event).subscribe((data) => {
    if (data.responseCode == "OK") 
      {
        this.eventList = data.result.Event;
        this.calendarEvents = data.result.Event;
      
        this.events = this.calendarEvents.map(obj => ({
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
      this.sbToastService.showIziToastMsg(err.error.result.messages[0], 'error');
    });
  }

  getFilteredData(event)
  {
    if(event.filtersSelected.eventType)
    {
      this.Filterdata ={
        "status":[],
        "eventType" :event.filtersSelected.eventType,
        "objectType": "Event"
      };
    }
    else
    {
      this.Filterdata ={
        "status":[],
        "objectType": "Event"
      };
    }
    let query="";
    this.eventFilterService.getfilterSeachData(this.Filterdata,query).subscribe((data) => {
      if (data.responseCode == "OK") 
        {
          this.eventList = data.result.Event;

          // Calendar events
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
        this.sbToastService.showIziToastMsg(err.error.result.messages[0], 'error');
      });
  }
}
