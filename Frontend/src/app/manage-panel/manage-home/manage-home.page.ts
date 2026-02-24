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
      title: 'Gestionar Trabajadores',
      description: 'Crear, modificar y eliminar empleados y sus credenciales.',
      icon: 'people-outline',
      color: 'primary',
      route: '/admin-panel/worker-list'
    },
    {
      title: 'Gestionar productos',
      description: 'Crear, modificar y eliminar los productos que se vayan a agregar.',
      icon: 'fast-food-outline',
      color: 'primary',
      route: '/manage-panel/product-list'
    },
    {
      title: 'Categoria de los productos',
      description: 'Crear, modificar y eliminar la categoria de los productos que se vayan a agregar.',
      icon: 'fast-food-outline',
      color: 'primary',
      route: '/admin-panel/product-categories'
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
   * @param route Ruta interna de la aplicación (ej: /manage-panel/product-list)
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

}
