import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageHomePage } from './manage-home.page';

const routes: Routes = [
  {
    path: '',
    component: ManageHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageHomePageRoutingModule {}
