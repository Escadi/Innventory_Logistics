import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkerCategoryPage } from './worker-category.page';

const routes: Routes = [
  {
    path: '',
    component: WorkerCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerCategoryPageRoutingModule {}
