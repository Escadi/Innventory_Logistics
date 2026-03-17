import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DriversHomePage } from './drivers-home.page';

describe('DriversHomePage', () => {
  let component: DriversHomePage;
  let fixture: ComponentFixture<DriversHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
