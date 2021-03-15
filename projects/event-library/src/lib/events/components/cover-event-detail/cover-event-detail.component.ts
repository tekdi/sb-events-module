import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-cover-event-detail',
  templateUrl: './cover-event-detail.component.html',
  styleUrls: ['./cover-event-detail.component.scss']
})
export class CoverEventDetailComponent implements OnInit {
  @Input() eventDetailItem: any;
  @Input() userData: string;
  eStart: any;
  eEnd: any;
  isEnrolled: boolean = false;
  constructor(
    private eventService: EventService,
    private timezoneCal: TimezoneCal) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.setDateTimeOnCover();
    }, 1000);
  }

  /**
   * for show Date Time as per timezone
   */
  setDateTimeOnCover() {
    this.eStart = (this.timezoneCal.calcTime(this.eventDetailItem.startDate, this.eventDetailItem.startTime)).toLocaleString();
    this.eEnd = (this.timezoneCal.calcTime(this.eventDetailItem.endDate, this.eventDetailItem.endTime)).toLocaleString();
  }

  isEnrollEvent(){
    this.isEnrolled = !this.isEnrolled;
  }

}
