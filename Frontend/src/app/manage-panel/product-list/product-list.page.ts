import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Myservice } from 'src/app/service/myservice';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
  standalone: false
})
export class ProductListPage implements OnInit {

  //VARIABLES PARA EL FILTRO DE CATEGORIAS
  selectedCategory: any[] = [];
  productos: any[] = [];


  //VARIABLES DEL MODAL
  isModalOpen: boolean = false;
  isEditModal: boolean = false;
  isAddProductModal: boolean = false;

  constructor(
    private myservice: Myservice,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllData();
  }


  /**
   * --------------------------------------------------------------------------------------------------------
   * FUNCIONES PARA OBTENER LOS PRODUCTOS
   * --------------------------------------------------------------------------------------------------------
   */
  getAllData() {
    this.myservice.getProductos().subscribe({ //OBTENER LOS PRODUCTOS
      next: (res: any) => {
        this.productos = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });

    this.myservice.getCategorias().subscribe({ //OBTENER LAS CATEGORIAS
      next: (res: any) => {
        this.selectedCategory = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
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

  openAddProductModal() {
    this.isAddProductModal = true;
  }

  closeAddProductModal() {
    this.isAddProductModal = false;
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
