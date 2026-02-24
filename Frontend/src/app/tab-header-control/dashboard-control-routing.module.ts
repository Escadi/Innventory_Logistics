import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardControlPage } from './dashboard-control.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardControlPage,
    children: [
      {
        path: 'dashboard-page',
        loadChildren: () => import('../dashboard-page/dashboard-page.module').then(m => m.DashboardPagePageModule)
      },
      {
        path: 'product-page',
        loadChildren: () => import('../product-page/product-page.module').then(m => m.ProductPagePageModule)
      },
      {
        path: 'client-page',
        loadChildren: () => import('../client-page/client-page.module').then(m => m.ClientPagePageModule)
      },
      {
        path: 'delivery-page',
        loadChildren: () => import('../delivery-page/delivery-page.module').then(m => m.DeliveryPagePageModule)
      },
      {
        path: 'setting-page',
        loadChildren: () => import('../setting-page/setting-page.module').then(m => m.SettingPagePageModule)
      },
      {
        path: 'provider-page',
        loadChildren: () => import('../provider-page/provider-page.module').then(m => m.ProviderPagePageModule)
      },
      {
        path: 'report-page',
        loadChildren: () => import('../report-page/report-page.module').then(m => m.ReportPagePageModule)
      },
      {
        path: 'admin-home',
        loadChildren: () => import('../admin-panel/admin-home/admin-home.module').then(m => m.AdminHomePageModule)
      },
      {
        path: 'manage-home',
        loadChildren: () => import('../manage-panel/manage-home/manage-home.module').then(m => m.ManageHomePageModule)
      },
      {
        path: 'product-list',
        loadChildren: () => import('../manage-panel/product-list/product-list.module').then(m => m.ProductListPageModule)
      },
      {
        path: 'product-category',
        loadChildren: () => import('../manage-panel/product-category/product-category.module').then(m => m.ProductCategoryPageModule)
      },
      {
        path: 'provider-list',
        loadChildren: () => import('../manage-panel/provider-list/provider-list.module').then(m => m.ProviderListPageModule)
      },
      {
        path: 'worker-category',
        loadChildren: () => import('../admin-panel/worker-category/worker-category.module').then(m => m.WorkerCategoryPageModule)
      },
      {
        path: '',
        redirectTo: 'dashboard-page',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardControlPageRoutingModule { }
