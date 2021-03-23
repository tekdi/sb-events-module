import { Injectable, Optional, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventModuleService {
  apiUrlConfig : any;
  constructor( @Optional() @Inject("urlConfig") public config: any) {
    this.apiUrlConfig = config.urlConfig;
  }
}
