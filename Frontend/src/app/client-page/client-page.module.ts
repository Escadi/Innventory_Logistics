import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientPagePageRoutingModule } from './client-page-routing.module';

import { ClientPagePage } from './client-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientPagePageRoutingModule
  ],
  declarations: [ClientPagePage]
})
export class ClientPagePageModule {}
