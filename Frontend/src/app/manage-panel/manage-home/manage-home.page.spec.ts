import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageHomePage } from './manage-home.page';

describe('ManageHomePage', () => {
  let component: ManageHomePage;
  let fixture: ComponentFixture<ManageHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
