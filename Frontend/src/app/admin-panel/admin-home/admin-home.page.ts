import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.page.html',
  styleUrls: ['./admin-home.page.scss'],
  standalone: false
})
export class AdminHomePage implements OnInit {

  /**
    * ------------------------------------------------------------------------------------------
    * VARIABLES A PARTIR DE MODULOS DE GESTIÓN DEL SISTEMA CREANDOLO EN UN FOR
    * EN EL HTML PARA QUE SE CREE CADA UNO DE LOS MODULOS
    * ------------------------------------------------------------------------------------------
    */
  adminModules = [
    {
      title: 'Gestionar Trabajadores',
      description: 'Crear, modificar y eliminar empleados y sus credenciales.',
      icon: 'people-outline',
      color: 'primary',
      route: '/dashboard-control/worker-list'
    },
    {
      title: 'Estructura y Roles',
      description: 'Gestionar el organigrama, departamentos , niveles de acceso y centros de trabajo .',
      icon: 'share-social-outline',
      color: 'success',
      route: '/dashboard-control/worker-category'
    },
    {
      title: 'Base de Datos',
      description: 'Generar copias de seguridad de las tablas y sus datos.',
      icon: 'server-outline',
      color: 'warning',
      route: '/dashboard-control/database'
    }
  ];

  constructor(
    private router: Router,
    private navCtrl: NavController
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
