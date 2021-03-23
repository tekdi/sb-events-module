import { Component, OnInit, Input } from '@angular/core';
import{ labelMessages } from './../labels'

@Component({
  selector: 'sb-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  labelMessages = labelMessages;
  @Input() eventDetailItem: any;
  @Input() userData: any;

  constructor() {
  }

  ngOnInit() {
  }
}





