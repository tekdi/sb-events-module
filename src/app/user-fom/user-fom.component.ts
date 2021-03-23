import { Component, OnInit } from '@angular/core';
import { EventCreateService } from '../../../projects/event-library/src/lib/events/services/event-create/event-create.service';

@Component({
  selector: 'app-user-fom',
  templateUrl: './user-fom.component.html',
  styleUrls: ['./user-fom.component.scss']
})
export class UserFomComponent implements OnInit {

  constructor(private eventCreateService: EventCreateService) { }
  formFieldProperties: any;

  ngOnInit() {
    this.showEventCreatePage();
  }

  showEventCreatePage() {
    this.eventCreateService.getEventFormConfig().subscribe((data: any) => {
      this.formFieldProperties = data.result['form'].data.fields;
      console.log(data.result['form'].data.fields);
    })
  }


}
