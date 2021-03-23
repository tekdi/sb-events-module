import { TestBed } from '@angular/core/testing';

import { EventCreateService } from './event-create.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('EventCreateService', () => {
  let service: EventCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
   
    service = TestBed.get(EventCreateService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
