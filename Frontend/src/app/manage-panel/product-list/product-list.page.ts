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
  centrosTrabajo: any[] = [];
  departamentos: any[] = [];

  //VARIABLES PARA EL FORMULARIO DE AGREGAR PRODUCTO Y EDITAR PRODUCTO
  idProducto: string = '';
  nombreProducto: string = '';
  descripcion: string = '';
  categoria: number = 0;
  idEmpleado: number = 0;
  precio: number = 0;
  imagen: string = '';




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

    this.myservice.getCentrosTrabajo().subscribe({ //OBTENER LOS CENTROS DE TRABAJO
      next: (res: any) => {
        this.centrosTrabajo = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });

    this.myservice.getDepartamentos().subscribe({ //OBTENER LOS DEPARTAMENTOS
      next: (res: any) => {
        this.departamentos = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
  /**
   * -------------------------------------------------------------------------------------------------------
   * FUNCIONES CRUD PARA PRODUCTOS , CREAR , MODIFICAR Y ELIMINAR PRODUCTO
   * -------------------------------------------------------------------------------------------------------
   */
  createProduct() {
    const product = {
      idProducto: this.idProducto,
      nombreProducto: this.nombreProducto,
      descripcion: this.descripcion,
      idEmpleado: this.idEmpleado,
      idcategoria: this.categoria,
      precio: this.precio,
      imagen: this.imagen
    }

    this.myservice.postProductos(product).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getAllData();
        this.closeModal();
        this.idProducto = '';
        this.nombreProducto = '';
        this.descripcion = '';
        this.categoria = 0;
        this.idEmpleado = 0;
        this.precio = 0;
        this.imagen = '';
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  updateProduct() {

  }

  deleteProduct(id: number) {
    this.myservice.deleteProductos(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getAllData();
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
