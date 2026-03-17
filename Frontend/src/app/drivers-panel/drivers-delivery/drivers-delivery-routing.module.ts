import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriversDeliveryPage } from './drivers-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: DriversDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriversDeliveryPageRoutingModule {}
