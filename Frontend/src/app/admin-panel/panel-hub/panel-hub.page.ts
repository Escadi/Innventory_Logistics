import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-panel-hub',
  templateUrl: './panel-hub.page.html',
  styleUrls: ['./panel-hub.page.scss'],
  standalone: false
})
export class PanelHubPage implements OnInit {
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
      route: '/admin-panel/worker-list'
    },
    {
      title: 'Departamentos',
      description: 'Crear, modificar y eliminar los departamentos.',
      icon: 'fast-food-outline',
      color: 'primary',
      route: '/admin-panel/departments'
    },
    {
      title: 'Estructura y Roles',
      description: 'Gestionar el organigrama, departamentos y niveles de acceso.',
      icon: 'share-social-outline',
      color: 'success',
      route: '/admin/categories'
    },
    {
      title: 'Base de Datos',
      description: 'Generar copias de seguridad de las tablas y sus datos.',
      icon: 'server-outline',
      color: 'warning',
      route: '/admin/database'
    }
  ];

  constructor(
    private router: Router,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  /**
   * -------------------------------------------------------------------------------------------
   * NAVEGA A LA RUTA ESPECIFICADA.
   * @param route Ruta interna de la aplicación (ej: /admin-panel/worker-list)
   * -------------------------------------------------------------------------------------------
   */
  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

  /**
   * -------------------------------------------------------------------------------------------
   * REGRESA A LA PÁGINA ANTERIOR.
   * -------------------------------------------------------------------------------------------
   */
  goBack() {
    this.navCtrl.back();
  }

  /**
   * -------------------------------------------------------------------------------------------
   * CIERRA LA SESIÓN DEL USUARIO.
   * -------------------------------------------------------------------------------------------
   */


}
