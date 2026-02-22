import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardControlPage } from './dashboard-control.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardControlPageRoutingModule {}
