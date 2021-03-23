import { Component, OnInit, Input } from '@angular/core';
import{ labelMessages } from './../labels'
@Component({
  selector: 'sb-advance-event-detail',
  templateUrl: './advance-event-detail.component.html',
  styleUrls: ['./advance-event-detail.component.scss']
})
export class AdvanceEventDetailComponent implements OnInit {
  @Input() eventDetailItem: any;
  labelMessages= labelMessages;
  isTruncate : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  truncateData(truncate)
  {
    this.isTruncate = truncate;
  }
}
