import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import{ labelMessages } from './../labels';
@Component({
  selector: 'sb-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  @Input() list: any;
  @Input() paginateLimit: number = 5;
  @Input() toSort;
  @Output() eventDetailData = new EventEmitter();
  @Output() redirectToDetail = new EventEmitter();
  @Input() myEvents: any;
  @Input() redirection: any = 'event';
  labelMessages = labelMessages;
  
  constructor(
    private router: Router,
    public translate: TranslateService
  ) {
    //translate.setDefaultLang('en');
  }

  ngOnInit() {
  }

  /*onEventWrapper(identifier) {
    alert('hiii2');
    
    this.router.navigate([this.redirection], {
      queryParams: {
        identifier: identifier,
        view: 'detail'
      }
    });
  }*/

  slideConfig = {"slidesToShow": 3, "slidesToScroll": 3};

  navToEventDetail(res){
      this.eventDetailData.emit(res);
    }
}
