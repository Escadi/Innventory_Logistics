import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss'],
  standalone: false
})
export class ProductPagePage implements OnInit {
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

  products = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      price: 10,
      stock: 100,
      category: 'Limpieza',
      image: 'https://ionicframework.com/docs/img/demos/card-media.png'
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripción del producto 2',
      price: 20,
      stock: 200,
      category: 'Limpieza',
      image: 'https://ionicframework.com/docs/img/demos/card-media.png'
    },
    {
      id: 3,
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      price: 30,
      stock: 300,
      category: 'Papeleria',
      image: 'https://ionicframework.com/docs/img/demos/card-media.png'
    }
  ]
  // Variable para controlar la visibilidad del modal
  isModalOpen: boolean = false;


  constructor() { }

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

}
