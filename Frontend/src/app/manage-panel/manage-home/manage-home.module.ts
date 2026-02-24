import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageHomePageRoutingModule } from './manage-home-routing.module';

import { ManageHomePage } from './manage-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageHomePageRoutingModule
  ],
  declarations: [ManageHomePage]
})
export class ManageHomePageModule {}
