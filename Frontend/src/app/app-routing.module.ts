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
    loadChildren: () => import('./admin-panel/worker-list/worker-list.module').then(m => m.WorkerListPageModule)
  },
  {
    path: 'manage-home',
    loadChildren: () => import('./manage-panel/manage-home/manage-home.module').then(m => m.ManageHomePageModule)
  },
  {
    path: 'manage-home',
    loadChildren: () => import('./manage-panel/manage-home/manage-home.module').then(m => m.ManageHomePageModule)
  },
  {
    path: 'admin-home',
    loadChildren: () => import('./admin-panel/admin-home/admin-home.module').then(m => m.AdminHomePageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./manage-panel/product-list/product-list.module').then(m => m.ProductListPageModule)
  },
  {
    path: 'product-category',
    loadChildren: () => import('./manage-panel/product-category/product-category.module').then(m => m.ProductCategoryPageModule)
  },
  {
    path: 'provider-list',
    loadChildren: () => import('./manage-panel/provider-list/provider-list.module').then(m => m.ProviderListPageModule)
  },
  {
    path: 'worker-category',
    loadChildren: () => import('./admin-panel/worker-category/worker-category.module').then(m => m.WorkerCategoryPageModule)
  },
  {
    path: 'database',
    loadChildren: () => import('./admin-panel/database/database.module').then( m => m.DatabasePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
