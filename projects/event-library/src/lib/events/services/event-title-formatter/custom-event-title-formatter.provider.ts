import { LOCALE_ID, Inject, Injectable } from "@angular/core";
import { CalendarEventTitleFormatter, CalendarEvent } from "angular-calendar";
import { formatDate } from "@angular/common";
import { MyCalendarEvent } from "../../interfaces/calendarEvent.interface";

@Injectable()
export class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
  starttime: any;
  str: any;
  start: any;
  constructor(@Inject(LOCALE_ID) private locale: string) {
    super();
  }

  // you can override any of the methods defined in the parent class

  month(event: MyCalendarEvent): string {
    this.start = new Date(this.convert(event));

    return `<b>${formatDate(this.start, "h:m a", this.locale)}</b> ${event.title
      }`;
  }

  week(event: MyCalendarEvent): string {
    this.start = new Date(this.convert(event));
    return `<b>${formatDate(this.start, "h:m a", this.locale)}</b> ${event.title
      }`;
  }

  day(event: MyCalendarEvent): string {
    this.start = new Date(this.convert(event));
    return `<b>${formatDate(this.start, "h:m a", this.locale)}</b> ${event.title
      }`;
  }

  convert(event) {
    var date = new Date(event.start),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    var datestr = [date.getFullYear(), mnth, day].join("/");

    this.starttime = event.starttime.split("+");
    this.str = datestr + " " + this.starttime[0];

    return this.str;
  }
}
