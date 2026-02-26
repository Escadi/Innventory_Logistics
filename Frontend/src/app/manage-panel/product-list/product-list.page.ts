import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
  standalone: false
})
export class ProductListPage implements OnInit {

  //VARIABLES PARA EL FILTRO DE CATEGORIAS
  selectedCategory: any[] = [
    {
      id: 1,
      valor: 'todos',
      nombre: 'Todos'
    },
    {
      id: 2,
      valor: 'papeleria',
      nombre: 'Papeleria'
    },
    {
      id: 3,
      valor: 'limpieza',
      nombre: 'Limpieza'
    },
    {
      id: 4,
      valor: 'alimentacion',
      nombre: 'Alimentacion'
    },
    {
      id: 5,
      valor: 'merchandising',
      nombre: 'Merchandising'
    },
    {
      id: 6,
      valor: 'tecnologia',
      nombre: 'Tecnologia'
    }
  ];


  //VARIABLES DEL MODAL
  isModalOpen: boolean = false;
  isEditModal: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**
   * --------------------------------------------------------------------------------------------------------
   * FUNCIONES DEL MODAL PARA LOS BOTONES DE AGREGAR Y EDITAR PRODUCTO
   * --------------------------------------------------------------------------------------------------------
   */
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  /**
   * --------------------------------------------------------------------------------------------------------
   * FUNCIONES PARA LA NAVEGACION
   * --------------------------------------------------------------------------------------------------------
   */
  goToAdminHome() {
    this.router.navigateByUrl('/dashboard-control/manage-home');
  }

}
