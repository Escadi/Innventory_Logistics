import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DriversDeliveryPage } from './drivers-delivery.page';

describe('DriversDeliveryPage', () => {
  let component: DriversDeliveryPage;
  let fixture: ComponentFixture<DriversDeliveryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversDeliveryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
