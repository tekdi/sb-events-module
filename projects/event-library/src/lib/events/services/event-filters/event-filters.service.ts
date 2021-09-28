import { Injectable } from '@angular/core';
import { SbToastService } from '../../services/iziToast/izitoast.service';
import { UserConfigService } from '../userConfig/user-config.service';
import { DataService } from '../data-request/data-request.service';

@Injectable({
  providedIn: 'root'
})
export class EventFilterService {

  constructor(
    private userConfigService: UserConfigService,
    private dataService: DataService,
    private sbToastService: SbToastService) {
  }

  /**
   * For get event form config 
   */
  getFilterFormConfig() {
    const req = {
      url: this.userConfigService.getConfigUrl().eventFilterConfigApi
    };
    return this.dataService.get(req);
  }

  /**
 * For post filter data
 */
  getfilterSeachData(filterval,searchval)
  {
    const requestBody = {
      "request": {
        "filters":filterval,
        "query":searchval,
        "fields": [
            "identifier",
            "name",
            "appIcon",
            "mimeType",
            "contentType",
            "startDate",
            "endDate",
            "status",
            "eventType",
            "code",
            "onlineProvider",
            "audience",
            "startTime"
          ]
        }
      }

    const option = {
       url: this.userConfigService.getConfigUrl().search,
      data: requestBody,
      header: { 'Content-Type' : 'application/json'}
    };

    return this.dataService.post(option); 
  }
}
