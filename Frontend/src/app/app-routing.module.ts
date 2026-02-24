import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPagePageModule)
  },
  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full'
  },
  {
    path: 'dashboard-control',
    loadChildren: () => import('./tab-header-control/dashboard-control.module').then(m => m.DashboardControlPageModule)
  },
  {
    path: 'worker-list',
    loadChildren: () => import('./admin-panel/worker-list/worker-list.module').then( m => m.WorkerListPageModule)
  },
  {
    path: 'product-category',
    loadChildren: () => import('./admin-panel/product-category/product-category.module').then( m => m.ProductCategoryPageModule)
  },
  {
    path: 'panel-hub',
    loadChildren: () => import('./admin-panel/panel-hub/panel-hub.module').then( m => m.PanelHubPageModule)
  },
  {
    path: 'manage-home',
    loadChildren: () => import('./manage-panel/manage-home/manage-home.module').then( m => m.ManageHomePageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./manage-panel/product-list/product-list.module').then( m => m.ProductListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
