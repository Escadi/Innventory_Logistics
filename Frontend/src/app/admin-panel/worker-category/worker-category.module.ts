import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerCategoryPageRoutingModule } from './worker-category-routing.module';

import { WorkerCategoryPage } from './worker-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkerCategoryPageRoutingModule
  ],
  declarations: [WorkerCategoryPage]
})
export class WorkerCategoryPageModule {}
