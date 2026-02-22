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
    loadChildren: () => import('./dashboard-control/dashboard-control.module').then( m => m.DashboardControlPageModule)
  },
  {
    path: 'product-page',
    loadChildren: () => import('./product-page/product-page.module').then( m => m.ProductPagePageModule)
  },
  {
    path: 'client-page',
    loadChildren: () => import('./client-page/client-page.module').then( m => m.ClientPagePageModule)
  },
  {
    path: 'delivery-page',
    loadChildren: () => import('./delivery-page/delivery-page.module').then( m => m.DeliveryPagePageModule)
  },
  {
    path: 'setting-page',
    loadChildren: () => import('./setting-page/setting-page.module').then( m => m.SettingPagePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
