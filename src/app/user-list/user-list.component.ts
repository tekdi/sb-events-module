import { Component, OnInit } from '@angular/core';
import {EventListService} from '../../../projects/event-library/src/lib/events/services/event-list/event-list.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor( private eventListService: EventListService,
    private router: Router) { }
    eventList: any;
    Filterdata:any;
    isLoading: boolean;


  ngOnInit() {
    this.showEventListPage();

  }

  /**
   * For get List of events
   */
  showEventListPage()
  {
    this.Filterdata ={
      "status":[],
      "objectType": "Event"
    };
    this.eventListService.getEventList(this.Filterdata).subscribe((data:any)=>{
      this.eventList = data.result.Event;
      this.isLoading = false;
    })
  }

  navToEventDetail(res){

    console.log({res});
    this.router.navigate(['home'], {
      queryParams: {
        identifier: res.identifier,
        view: 'home'
      }
    });
    }
  
}
