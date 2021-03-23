import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import{ labelMessages } from './../labels';
import { EventService } from '../../services/event/event.service'
import { TimezoneCal } from '../../services/timezone/timezone.service';
import { DataService } from '../../services/data-request/data-request.service';
import { UserConfigService } from '../../services/userConfig/user-config.service';

@Component({
  selector: 'sb-cover-event-detail',
  templateUrl: './cover-event-detail.component.html',
  styleUrls: ['./cover-event-detail.component.scss']
})
export class CoverEventDetailComponent implements OnInit {
  @Input() eventDetailItem: any;
  @Input() userData: string;
  isOwner = true;
  labelMessages = labelMessages;
  eStart: any;
  eEnd: any;
  isEnrolled: boolean = false;
  items: any;
  constructor(
    private router:Router,
    private eventService: EventService,
    private timezoneCal: TimezoneCal,
    private dataService: DataService,
    private userConfigService: UserConfigService) {
  }
  @Output() retireEventId = new EventEmitter<string>();

  ngOnInit() {
    setTimeout(() => {
      this.userConfigService.userId = this.userData;
      this.isEnrollEvent();
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

  /**
   * For check user is enrolled or not
   * 
   * @param courseId Event id
   * @param userId Log-in user Id 
   */
  isEnrollEvent() {
    this.eventService.getEnrollEvents(this.eventDetailItem.code, this.userData).subscribe((data) => {
      this.items = data.result.courses;

      this.items.find((o, i) => {
        if (o.courseId === this.eventDetailItem.code) {
          this.isEnrolled = true;
        }

      });
    });
  }

  upate(identifier) {
     this.router.navigate(['/event-post'], {
      queryParams: {
        identifier: identifier
      }
    });
  }
  retireEvent(identifier: string) {
    this.retireEventId.emit(identifier);
  }

  /**
   * Enroll/Unenroll event
   * 
   * @param action enroll/unenroll 
   */
  enrollToEvent(action) {
    this.eventService.enrollToEventPost(action, this.eventDetailItem.code, this.userData);
  }

}
