import { Component, OnInit } from '@angular/core';
import {EventListService} from '../../../projects/event-library/src/lib/events/services/event-list/event-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor( private eventListService: EventListService) { }
  eventList: any;

  ngOnInit() {
    this.showEventListPage();

  }
  showEventListPage(){
    this.eventListService.getEventList().subscribe((data:any)=>{
       console.log(data);
      this.eventList = data;
    })
  }

  
}
