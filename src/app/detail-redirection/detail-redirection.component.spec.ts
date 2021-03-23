import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRedirectionComponent } from './detail-redirection.component';

describe('DetailRedirectionComponent', () => {
  let component: DetailRedirectionComponent;
  let fixture: ComponentFixture<DetailRedirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailRedirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRedirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
