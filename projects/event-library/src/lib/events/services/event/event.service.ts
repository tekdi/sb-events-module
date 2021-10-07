import { Injectable } from '@angular/core';
import { DataService } from '../data-request/data-request.service';
import { UserConfigService } from '../userConfig/user-config.service';
import { TimezoneCal } from '../../services/timezone/timezone.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  isEnroll: boolean = false;
  items: any;
  today = new Date();
  todayDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + this.today.getDate()).slice(-2);
  todayTime = this.today.getHours() + ":" + this.today.getMinutes();
  todayDateTime = this.timezoneCal.calcTime(this.todayDate, this.todayTime);  

  constructor(
    private userConfigService: UserConfigService,
    private timezoneCal: TimezoneCal,
    private dataService: DataService) {
  }

  /**
   * To user enrolled event list
   */
  getEnrollEvents(cId, userId){
    const requestBody = {
      request: {
        "userId": userId,
      }
    };

    const option = {
      url: this.userConfigService.getConfigUrl().enrollUserEventList,
      data: requestBody,
      header: { 'Content-Type' : 'application/json'}
    };

    return this.dataService.post(option); 
  }

  /**
   * For Enroll/Unenroll to the event
   */
  enrollToEventPost(action, cId, uId, batchDetails) {
    const requestBody = {
      request: {
        "courseId": cId,
        "userId": uId,
        "batchId": batchDetails.batchId
      }
    };

    if (action == 'enroll')
    {
      const req = {
        url: this.userConfigService.getConfigUrl().enrollApi,
        data: requestBody
      };

      return this.dataService.post(req);
    }
    else if (action == 'unenroll')
    {
      const req = {
        url: this.userConfigService.getConfigUrl().unenrollApi,
        data: requestBody
      };

      return this.dataService.post(req);
    }
  }

 /**
  * Get a BBB Moderator meeting link
  * @param EventId 
  * @returns BBB Moderator meeting link
  */
  getBBBURlModerator(EventId)
  {
      const req = {
        url: this.userConfigService.getConfigUrl().BBBGetUrlModerator + '/' + EventId
      };

      return this.dataService.get(req);
  }

 /**
  * Get BBB Attendee meeting link
  * @param EventId 
  * @returns BBB Attendee meeting link
  */
  getBBBURlAttendee(EventId)
  {
      const req = {
        url: this.userConfigService.getConfigUrl().BBBGetUrlAttendee + '/' + EventId
      };

      return this.dataService.get(req);
  }

   /**
    * Serch / get batchs
    * @param filterval array of filter values 
    */
   getBatches(filterval)
   {
      const requestBody = {
      "request": {
          "filters":filterval,
          "sort_by": {
              "createdDate": "desc"
          }
        }
      }

    const option = {
      url: this.userConfigService.getConfigUrl().batchlist,
      data: requestBody,
      header: { 'Content-Type' : 'application/json'}
    };

    return this.dataService.post(option); 
   }

  /**
   * Create batch for event
   */
  createBatch(requestValue){
    const requestBody = {
      "request": requestValue
      }

    const option = {
      url: this.userConfigService.getConfigUrl().createBatch,
      data: requestBody,
      header: { 'Content-Type' : 'application/json'}
    };

    return this.dataService.post(option); 
  }

  convertDate(eventDate) {
    var date = new Date(eventDate),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
    
    var datestr = [date.getFullYear(), mnth, day].join("/");

    return datestr;
  }

  /** Get event Status and show on list view  
   * 1. Past
   * 2. Ongoing
   * 3. Upcoming
   * */  
  async getEventStatus(event) {
    // Event Start date time 
    var startEventTime = await this.timezoneCal.calcTime(event.startDate, event.startTime);
    var startDifference = startEventTime.getTime() - this.todayDateTime.getTime();
    var startInMinutes = Math.round(startDifference / 60000);

    // Event end date time
    var endEventTime = this.timezoneCal.calcTime(event.endDate, event.endTime);
    var endDifference = this.todayDateTime.getTime() - endEventTime.getTime();
    var endInMinutes = Math.round(endDifference / 60000);

    if (startInMinutes >= 10 && endInMinutes < 0)
    {
      event.eventStatus = 'Upcoming';
      event.showDate = 'Satrting On: ' + event.startDate;
    }
    else if (startInMinutes <= 10 && endInMinutes < 0)
    {
      event.eventStatus = 'Ongoing';
      event.showDate = 'Ending On: ' + event.endDate;
    }
    else if (startInMinutes <= 10 && endInMinutes > 0)
    {
      event.eventStatus = 'Past';
      event.showDate = 'Ended On: ' + event.endDate;
    }

    return event;
  }

}


