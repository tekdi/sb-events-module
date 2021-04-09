import { NgModule } from '@angular/core';
import { EventsModule } from './events/events.module';
import { EventModuleComponent } from './event-library.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//services
import { EventDetailService } from './events/services/event-detail/event-detail.service';
import { EventCreateService } from './events/services/event-create/event-create.service';
import { EventModuleService} from './event-library.service';;
import { TimezoneCal } from './events/services/timezone/timezone.service';

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
    EventModuleService,
    TimezoneCal,
  ]
})
export class EventLibraryModule { }
