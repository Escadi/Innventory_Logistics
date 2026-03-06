import { Component, OnInit } from '@angular/core';
import { Myservice } from '../service/myservice';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss'],
  standalone: false
})
export class ProductPagePage implements OnInit {
  //VARIABLES PARA EL FILTRO DE CATEGORIAS
  selectedCategory: any[] = [];
  productos: any[] = [];
  isModalOpen: boolean = false;


  constructor(
    private myservice: Myservice
  ) { }

  ngOnInit() {
  }

  /**
   * -----------------------------------------------------------------------------------------
   * METODOS PARA EL MANEJO DEL MODAL
   * -----------------------------------------------------------------------------------------
   */
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  /**
   * --------------------------------------------------------------------------------------------------------
   * FUNCIONES PARA OBTENER LOS GET DE CADA UNO DE LAS FUNCIONALIDADES 
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
}
