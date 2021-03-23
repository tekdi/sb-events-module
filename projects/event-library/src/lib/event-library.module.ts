import { NgModule, ModuleWithProviders } from '@angular/core';
import { EventsModule } from './events/events.module';
import { EventModuleComponent } from './event-library.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//services
import { EventDetailService } from './events/services/event-detail/event-detail.service';
import { EventCreateService } from './events/services/event-create/event-create.service';
import { EventModuleService} from './event-library.service';
import { EventListService } from './events/services/event-list/event-list.service';
import { SbToastService } from './events/services/iziToast/izitoast.service';
import { TimezoneCal } from './events/services/timezone/timezone.service';
import { UserConfigService } from './events/services/userConfig/user-config.service';
import { DataService } from './events/services/data-request/data-request.service';

@NgModule({
  declarations: [EventLibraryComponent],
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
    EventListService,
    EventLibraryService,
    SbToastService,
    TimezoneCal,
    UserConfigService,
    DataService
  ]
})
export class EventLibraryModule { }
