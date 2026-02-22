import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientPagePage } from './client-page.page';

describe('ClientPagePage', () => {
  let component: ClientPagePage;
  let fixture: ComponentFixture<ClientPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
