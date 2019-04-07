import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideRequestsPage } from './guide-requests.page';

describe('GuideRequestsPage', () => {
  let component: GuideRequestsPage;
  let fixture: ComponentFixture<GuideRequestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideRequestsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideRequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
