import { Component, OnInit } from '@angular/core';

import { EventDetailService } from './../../../projects/event-library/src/lib/events/services/event-detail/event-detail.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  eventItem: any;
  eventList: any;
  userId: any = "123";
  constructor(private eventDetailService: EventDetailService  
   ) { }

  ngOnInit() {
    this.showEventDetailPage();
  }

  showEventDetailPage() {
    this.eventDetailService.getEvent().subscribe((data: any) => {
      this.eventItem = data.result.content;
    },
      (err: any) => {
        console.log('err = ', err);
      });
  }
}
