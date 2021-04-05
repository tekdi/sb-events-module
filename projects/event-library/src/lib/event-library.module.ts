import { NgModule, ModuleWithProviders } from '@angular/core';
import { EventsModule } from './events/events.module';
import { EventModuleComponent } from './event-library.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//services
import { EventDetailService } from './events/services/event-detail/event-detail.service';
import { EventCreateService } from './events/services/event-create/event-create.service';
import { EventListService } from './events/services/event-list/event-list.service';
import { EventLibraryService } from './event-library.service';
import { TimezoneCal } from './events/services/timezone/timezone.service';
import { DataService } from './events/services/data-request/data-request.service';
import { SbToastService } from './events/services/iziToast/izitoast.service';
import { EventService } from "./events/services/event/event.service";
import { UserConfigService } from './events/services/userConfig/user-config.service';

@NgModule({
  declarations: [EventModuleComponent],
  imports: [
    EventsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  exports: [EventsModule,
    ],
  providers: [
    EventDetailService, 
    EventCreateService,
    EventLibraryService,
    TimezoneCal,
    DataService,
    SbToastService,
    EventService,
    EventListService,
    UserConfigService
  ]
})

export class EventLibraryModule {
  public static forChild(config: any): ModuleWithProviders {
    return {
      ngModule: EventLibraryModule,
      providers: [
        EventLibraryService,
        {
          provide: "urlConfig",
          useValue: config
        }
      ]
    };
  }
}