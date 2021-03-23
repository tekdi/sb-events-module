import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserConfigService } from '../userConfig/user-config.service';
import { DataService } from '../data-request/data-request.service';

@Injectable({
  providedIn: 'root'
})
export class EventListService {

  constructor(
    private http: HttpClient,
    private userConfigService: UserConfigService,
    private dataService: DataService) {
  }


  /**
   * For get event list 
   */
  getEventList() {
    const req = {
      url: this.userConfigService.getConfigUrl().eventListApi
    };
    return this.dataService.get(req);
  }

  getEventFilters() {
    return this.http.get<any>('assets/eventFilter.json');
  }

}
