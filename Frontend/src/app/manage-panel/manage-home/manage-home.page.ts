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
      title: 'Gestionar Proveedores',
      description: 'Crear, modificar y eliminar proveedores.',
      icon: 'id-card-outline',
      color: 'success',
      route: '/dashboard-control/provider-list'
    },
    {
      title: 'Registro de clientes ',
      description: 'Crear, modificar y eliminar a los clientes.',
      icon: 'person-outline',
      color: 'success',
      route: '/dashboard-control/client-list'
    },
    {
      title: 'Gestionar Vehiculos',
      description: 'Crear , modificar y eliminar vehiculos de la compañia.',
      icon: 'car-outline',
      color: 'warning',
      route: '/dashboard-control/vehicle-list'
    },
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  /**
   * -------------------------------------------------------------------------------------------
   * NAVEGA A LA RUTA ESPECIFICADA.
   * @param route Ruta interna de la aplicación (ej: /dashboard-control/worker-list)
   * -------------------------------------------------------------------------------------------
   */
  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }


}
