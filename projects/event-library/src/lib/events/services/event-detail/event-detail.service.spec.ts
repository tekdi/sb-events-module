import { TestBed } from '@angular/core/testing';
import { EventDetailService } from './event-detail.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('EventDetailService', () => {
  let service: EventDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
   
    service = TestBed.get(EventDetailService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
