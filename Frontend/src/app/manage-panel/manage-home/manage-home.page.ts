import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-manage-home',
  templateUrl: './manage-home.page.html',
  styleUrls: ['./manage-home.page.scss'],
  standalone: false
})
export class ManageHomePage implements OnInit {

  /**
    * ------------------------------------------------------------------------------------------
    * VARIABLES A PARTIR DE MODULOS DE GESTIÓN DEL SISTEMA CREANDOLO EN UN FOR
    * EN EL HTML PARA QUE SE CREE CADA UNO DE LOS MODULOS
    * ------------------------------------------------------------------------------------------
    */
  adminModules = [
    {
      title: 'Gestionar Personal',
      description: 'modificar empleados y sus credenciales.',
      icon: 'people-outline',
      color: 'primary',
      route: '/dashboard-control/worker-list'
    },
    {
      title: 'Gestionar Productos',
      description: 'Crear, modificar y eliminar productos.',
      icon: 'shirt-outline',
      color: 'success',
      route: '/dashboard-control/product-list'
    },
    {
      title: 'Gestionar Categorias',
      description: 'Crear, modificar y eliminar categorias de los productos.',
      icon: 'pricetag-outline',
      color: 'success',
      route: '/dashboard-control/product-category'
    },
    {
      title: 'Gestionar Proveedores',
      description: 'Crear, modificar y eliminar proveedores.',
      icon: 'id-card-outline',
      color: 'success',
      route: '/dashboard-control/provider-list'
    }
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  /**
   * -------------------------------------------------------------------------------------------
   * NAVEGA A LA RUTA ESPECIFICADA.
   * @param route Ruta interna de la aplicación (ej: /admin/workers)
   * -------------------------------------------------------------------------------------------
   */
  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }


}
