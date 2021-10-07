import { Component, OnInit, Input } from '@angular/core';
import { TimezoneCal } from '../../services/timezone/timezone.service';
import { EventService } from '../../services/event/event.service'

@Component({
  selector: 'sb-join-event-button',
  templateUrl: './join-event-button.component.html',
  styleUrls: ['./join-event-button.component.scss']
})

export class JoinEventComponent implements OnInit {
  @Input() eventDetailItem: any;
  @Input() userData: string;
  @Input() canUnenroll: boolean = true;


  todayDateTime: any;
  isUserAbleToJoin: boolean = false;
  isEnrolled: boolean = false;
  today: any;
  todayDate: any;
  todayTime: any;
  startInMinutes: any;
  items: any;
  warningMessage: any;

  constructor(
    private eventService: EventService,
    private timezoneCal: TimezoneCal
        ) {
  }

  ngOnInit() {
    if(this.eventDetailItem){
      this.isEnrollEvent();
      this.joinEvent();
    }
}

  /**
   * For validate and show/hide join button
   */
  async joinEvent() {

    this.today = new Date();
    this.todayDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + this.today.getDate()).slice(-2);
    this.todayTime = this.today.getHours() + ":" + this.today.getMinutes();

    var todayDateTime = this.timezoneCal.calcTime(this.todayDate, this.todayTime);
    var startEventTime = await this.timezoneCal.calcTime(this.eventDetailItem.startDate, this.eventDetailItem.startTime);

    var startDifference = startEventTime.getTime() - todayDateTime.getTime();
    var startInMinutes = Math.round(startDifference / 60000);

    var endEventTime = this.timezoneCal.calcTime(this.eventDetailItem.endDate, this.eventDetailItem.endTime);

    var endDifference = todayDateTime.getTime() - endEventTime.getTime();
    var endInMinutes = Math.round(endDifference / 60000);

    this.isUserAbleToJoin = (startInMinutes <= 10 && endInMinutes < 0) ? true : false;

  }

  /**
    * For check user is enrolled or not
    * @param courseId Event id
    * @param userId Log-in user Id 
    */
  async isEnrollEvent() {
    this.eventService.getEnrollEvents(this.eventDetailItem.identifier, this.userData).subscribe((data) => {
      this.items = data.result.courses;

      this.items.find((o, i) => {
        if (o.courseId === this.eventDetailItem.identifier) {
          this.isEnrolled = true;
        }

      });
    });
  }

  /**
   * Enroll/Unenroll event
   * 
   * @param action enroll/unenroll 
   */
     enrollToEvent(action) {
       // Check whether Event has batch or not
      // filter set for serch batch for selected event
      let filters ={
          "courseId": this.eventDetailItem.identifier,
          "enrollmentType": "open"
       };

      this.eventService.getBatches(filters).subscribe((res) => {
          if (res.responseCode == "OK") 
          {
              if (res.result.response.count == 0)
              {
                // If batch not created then return the mssage
                this.warningMessage = 'Unable to enroll/de-enroll to this event. Batch is not created to that event OR event not publish yet.'
                console.log(this.warningMessage);
                this.isEnrolled = false; 
              }
              else
              {
                let batchDetails = res.result.response.content[0];
                this.eventService.enrollToEventPost(action, 
                                                    this.eventDetailItem.identifier, 
                                                    this.userData, 
                                                    batchDetails).subscribe((res) => {
                  if (res.result.response == "SUCCESS")
                  {
                    if (action == "enroll")
                    {
                      this.isEnrolled = true;
                    }
                    else if (action == "unenroll")
                    {
                      this.isEnrolled = false;
                    } 
                  }
                });
              }
          }
      });
      
    }

  /**
   * For join event : check the online event Provider link for join
   */
    checkEventProvider()
    {
      if (!this.eventDetailItem.onlineProviderData)
      {
        this.openProviderLink(this.eventDetailItem.onlineProviderData);
      } 
      else 
      {
        if (this.userData == this.eventDetailItem.owner)
        {
          // return moderatorMeetingLink
          this.eventService.getBBBURlModerator(this.eventDetailItem.identifier).subscribe((data) => {
            this.openProviderLink(data.result.event.moderatorMeetingLink);
          });
        }
        else
        {
          // return attendeeMeetingLink
          this.eventService.getBBBURlAttendee(this.eventDetailItem.identifier).subscribe((data) => {
            this.openProviderLink(data.result.event.attendeeMeetingLink);
          });
        }
        
      }
    }
    
  /**
   * For join attain event
   * 
   * @param joinLink event join url
   */
  openProviderLink(joinLink) {
    window.open(joinLink, "_blank");
  }
}
