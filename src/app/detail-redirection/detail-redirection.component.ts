import { Component, OnInit , Input, Output  } from '@angular/core';
import { EventDetailService } from '../../../projects/event-library/src/lib/events/services/event-detail/event-detail.service';
import { EventCreateService } from '../../../projects/event-library/src/lib/events/services/event-create/event-create.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-redirection',
  templateUrl: './detail-redirection.component.html',
  styleUrls: ['./detail-redirection.component.scss']
})
export class DetailRedirectionComponent implements OnInit {

  eventItem: any;
  formFieldProperties: any;
  ViewPage: any;
  userData:any;
  constructor(private activatedRoute: ActivatedRoute,
    private eventDetailService: EventDetailService, private eventCreateService: EventCreateService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.ViewPage = params.view;
    });
  this.showEventDetailPage();
  this.showEventCreatePage();
  }

  showEventDetailPage() {
    this.eventDetailService.getEvent().subscribe((data: any) => {
     this.eventItem = data.result.content;
    },
      (err: any) => {
        console.log('err = ', err);
      });
  }
  showEventCreatePage() {
    this.eventCreateService.getEventFormConfig().subscribe((data: any) => {
      this.formFieldProperties = data.result['form'].data.fields;
    })
  }
}
