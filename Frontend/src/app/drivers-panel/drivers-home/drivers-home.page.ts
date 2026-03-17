import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drivers-home',
  templateUrl: './drivers-home.page.html',
  styleUrls: ['./drivers-home.page.scss'],
  standalone: false
})
export class DriversHomePage implements OnInit {

  /**
 * ------------------------------------------------------------------------------------------
 * VARIABLES A PARTIR DE MODULOS DE GESTIÓN DEL SISTEMA CREANDOLO EN UN FOR
 * EN EL HTML PARA QUE SE CREE CADA UNO DE LOS MODULOS
 * ------------------------------------------------------------------------------------------
 */
  adminModules = [
    {
      title: 'Gestionar Pedidos',
      description: 'Gestionar los pedidos que se le asignen.',
      icon: 'people-outline',
      color: 'primary',
      route: '/dashboard-control/drivers-delivery'
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
