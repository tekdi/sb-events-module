import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  Input,
} from "@angular/core";

import { DatePipe } from "@angular/common";
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from "date-fns";
import { Subject } from "rxjs";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
  CalendarEventTitleFormatter,
} from "angular-calendar";
import { CustomEventTitleFormatter } from "../../services/event-title-formatter/custom-event-title-formatter.provider";
import { Router } from "@angular/router";
import { labelMessages } from "./../labels";
import { MyCalendarEvent } from "../../interfaces/calendarEvent.interface";

@Component({
  selector: "lib-event-calender",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./event-calender.component.html",
  styleUrls: ["./event-calender.component.css"],
  providers: [
    {
      provide: CalendarEventTitleFormatter,
      useClass: CustomEventTitleFormatter,
    },
  ],
})
export class EventCalenderComponent implements OnInit {
  labelMessages = labelMessages;

  eventCalender: any;
  eventItem: any;
  eventDetaildata: any;
  isOwner = true;
  @Input() eventDetailItem: any;
  @Input() userData: any;
  @Input() canUnenroll: boolean;
  @ViewChild("modalContent", { static: true, read: TemplateRef })
  modalContent: TemplateRef<any>;
  @Input() events;
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  closeResult = "";
  viewDate: Date = new Date();
  modalData: {
    action: string;
    event: MyCalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: "",
      a11yLabel: "Edit",
      onClick: ({ event }: { event: MyCalendarEvent }): void => {
        this.handleEvent("Edited", event);
      },
    },
  ];
  refresh: Subject<any> = new Subject();
  activeDayIsOpen: boolean = true;

  constructor(
    private modal: NgbModal,
    private router: Router,
    public datepipe: DatePipe
  ) { }

  ngOnInit() { }

  handleEvent(action: string, event: MyCalendarEvent): void {
    this.modalData = { event, action };
    this.isOwner = true;

    this.isOwner = this.modalData.event.owner == "1001" ? true : false;
    this.modal.open(this.modalContent);
  }

  dayClicked({
    date,
    events,
  }: {
    date: Date;
    events: MyCalendarEvent[];
  }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent("Dropped or resized", event);
  }

  deleteEvent(eventToDelete: MyCalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  navToEventDetail(res) {
    var obj = res;
    this.router.navigate(["/event-post"], {
      queryParams: {
        identifier: obj.identifier,
      },
    });
  }
}
