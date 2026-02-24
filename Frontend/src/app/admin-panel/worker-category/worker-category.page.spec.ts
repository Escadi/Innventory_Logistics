import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkerCategoryPage } from './worker-category.page';

describe('WorkerCategoryPage', () => {
  let component: WorkerCategoryPage;
  let fixture: ComponentFixture<WorkerCategoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
