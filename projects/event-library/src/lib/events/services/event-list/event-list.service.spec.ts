import { TestBed } from '@angular/core/testing';

import { EventListService } from './event-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('EventCreateService', () => {
  let service: EventListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
   
    service = TestBed.get(EventListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
