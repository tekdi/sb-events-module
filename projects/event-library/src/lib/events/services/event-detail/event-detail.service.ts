import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IEventDetailInterface } from '../../interfaces/event-detail.interface';
import { EventLibraryService } from '../../../event-library.service';
import { UserConfigService } from '../userConfig/user-config.service';
import { DataService } from '../data-request/data-request.service';

@Injectable({
  providedIn: 'root'
})
export class EventDetailService {

  constructor(
    private http: HttpClient,
    private eventLibraryService: EventLibraryService,
    private userConfigService: UserConfigService,
    private dataService: DataService) {
  }


  /**
   * For get event detail 
   */
  getEvent() {
    const req = {
      url: this.userConfigService.getConfigUrl().eventDetailApi
    };

    return this.dataService.get(req);
  }


  /**
   * For enroll/unenroll user
   */
  enrollUser(cId, uId) {
    //param : cid and uid
    //let apiUrl = '' + this.eventLibraryService.userID;
    //return this.http.get<any>(apiUrl);

    const requestBody = {
      request: {
        "courseId": cId,
        "userId": uId,
        "fixedBatchId": "event_batch_id"
      }
    };
  }

  /**
   * For retire event
   */
  retireEvent(eventIdentifier){
    console.log("add retire call here for:", eventIdentifier);
    return eventIdentifier;
  }

}


