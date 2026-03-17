import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriversDeliveryPageRoutingModule } from './drivers-delivery-routing.module';

import { DriversDeliveryPage } from './drivers-delivery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriversDeliveryPageRoutingModule
  ],
  declarations: [DriversDeliveryPage]
})
export class DriversDeliveryPageModule {}
