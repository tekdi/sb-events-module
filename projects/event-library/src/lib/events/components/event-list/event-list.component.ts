import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { ConfigService } from './../../services/shared/config.service';
 import{ labelMessages } from './../labels'
@Component({
  selector: 'sb-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  labelMessages = labelMessages;
  @Input() list: any;
  @Input() redirection:any;
  filteredEvents: any;
  firstEle:any = 0;
  pageNo:number = 0;
  limit:number = 2;
  totalEvents:number;
  totalPages: number;
  constructor(
    private router:Router,
    // private configService: ConfigService
    ) { }

  ngOnInit() {
    this.getSubmissionList();
  }

  getSubmissionList(isPrev?,isNext?) {
    this.totalEvents = this.list.length;
    this.totalPages = ((this.totalEvents - (this.totalEvents % this.limit))/this.limit)-1;
    if (isNext)
    {
      this.pageNo++;
    }
    if (isPrev)
    {
      this.pageNo--;
    }
    this.firstEle = this.pageNo * this.limit;
    this.filteredEvents = this.list.slice(this.firstEle, this.firstEle + this.limit);
  } 
  onEventselect(identifier) {
    this.router.navigate([this.redirection], {
      queryParams: {
        identifier: identifier,
        view:'detail'
      }
    });

  } 
}
