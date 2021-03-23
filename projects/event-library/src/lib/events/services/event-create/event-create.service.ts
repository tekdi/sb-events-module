import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SbToastService } from '../../services/iziToast/izitoast.service';
import { UserConfigService } from '../userConfig/user-config.service';
import { DataService } from '../data-request/data-request.service';

@Injectable({
  providedIn: 'root'
})
export class EventCreateService {

  constructor(
    private http: HttpClient,
    private userConfigService: UserConfigService,
    private dataService: DataService,
    private sbToastService: SbToastService) {
  }

  /**
   * For get event form config 
   */
  getEventFormConfig() {
    const req = {
      url: this.userConfigService.getConfigUrl().eventFormConfigApi
    };
    return this.dataService.get(req);
  }

  /**
 * For post event data
 */
  saveEvent(formData) {
    const requestBody = {
      request: {
        content: {
          formData
        }
      }
    };

    const option = {
      // url: ``,
      data: requestBody
    };
    if(formData.identifier){
      //update post call
    }
    else{
      // create post call
    }
    // this.sbToastService.showIziToastMsg("New Event Created Successfully", 'success');
  }

  /**
 * For post event data
 */
  createEvent(formData) {
    const requestBody = {
      "name":"sd",
      "salary":"12",
      "age":"23"
    };

    const requestBody1 = {
      request: {
        content: {
          formData
        }
      }
    };

    const option = {
       url: this.userConfigService.getConfigUrl().eventCreateApi,
      data: requestBody,
      header: { 'Access-Control-Allow-Origin' : '*'}
    };

    this.dataService.post(option).subscribe((data)=>{
    });

    this.sbToastService.showIziToastMsg("New Event Created Successfully", 'success');
  }

}
