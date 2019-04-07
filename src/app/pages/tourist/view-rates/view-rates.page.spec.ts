import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRatesPage } from './view-rates.page';

describe('ViewRatesPage', () => {
  let component: ViewRatesPage;
  let fixture: ComponentFixture<ViewRatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRatesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
