import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientPagePage } from './client-page.page';

const routes: Routes = [
  {
    path: '',
    component: ClientPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPagePageRoutingModule {}
