import { Injectable } from '@angular/core';
import { UserConfigService } from '../userConfig/user-config.service';
import { DataService } from '../data-request/data-request.service';

@Injectable({
  providedIn: 'root'
})
export class EventListService {

  constructor(
    private userConfigService: UserConfigService,
    private dataService: DataService) {
  }

  /**
   * For get event list 
   */
   getEventList(filterValue,query?:any)
   {
      const requestBody = {
        "request": {
          "filters":filterValue,
          "query":query,
          }
        }

      const option = {
        url: this.userConfigService.getConfigUrl().search,
        data: requestBody,
        header: { 'Content-Type' : 'application/json'}
      };
      
      return this.dataService.post(option);
  }

  getCalenderlist() {
    const req = {
      url: this.userConfigService.getConfigUrl().calenderevent
    };

    return this.dataService.get(req);
    
  }

  getEventFilters() {
    // return this.http.get<any>('assets/eventFilter.json');
  }

  /**
   * For getting myevent list 
   */
  getMyEventList(userId) {
    const req = {
      url: this.userConfigService.getConfigUrl().myEvents
    };

    return this.dataService.get(req);
  }

  /**
   * For getting filter config
   */
    /**
   * For get event form config 
   */
  getFilterFormConfig() {
    const req = {
      url: this.userConfigService.getConfigUrl().eventFilterConfigApi
    };
    return this.dataService.get(req);
  }
  
}
