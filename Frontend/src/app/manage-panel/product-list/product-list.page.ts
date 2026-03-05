import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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

  //VARIABLES PARA EL FORMULARIO DE AGREGAR PRODUCTO
  idProducto: string = '';
  nombreProducto: string = '';
  descripcion: string = '';
  idCategoria: number = 0;
  idEmpleado: number = 1;
  precio: number = 0;
  imagen: string = '';

  //VARIABLES DEL MODAL
  isModalOpen: boolean = false;
  isEditModal: boolean = false;
  isAddProductModal: boolean = false;

  constructor(
    private myservice: Myservice,
    private router: Router,
    private alertController: AlertController
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
  createProduct() { // CREAMOS EL PRODUCTO
    const product = {
      idProducto: this.idProducto,
      nombreProducto: this.nombreProducto,
      descripcion: this.descripcion,
      idEmpleado: this.idEmpleado,
      idCategoria: this.idCategoria,
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
        this.idCategoria = 0;
        this.idEmpleado = 0;
        this.precio = 0;
        this.imagen = '';
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  updateProduct(id: number) { // ACTUALIZAMOS EL PRODUCTO ENVIANDO LOS DATOS AL ION-MODAL
    const product = {
      idProducto: this.idProducto,
      nombreProducto: this.nombreProducto,
      descripcion: this.descripcion,
      idEmpleado: this.idEmpleado,
      idcategoria: this.idCategoria,
      precio: this.precio,
      imagen: this.imagen
    }

    this.myservice.putProductos(id, product).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getAllData();
        this.closeModal();
        this.idProducto = '';
        this.nombreProducto = '';
        this.descripcion = '';
        this.idCategoria = 0;
        this.idEmpleado = 0;
        this.precio = 0;
        this.imagen = '';
      },
      error: (err: any) => {
        console.log(err);
      }
    });

  }

  async deleteProduct(id: number) {
    // ELIMINAMOS EL PRODUCTO CON EL BOTON QUE SE ENCUENTRA EN EL GRID
    const alert = await this.alertController.create({
      header: 'Eliminando Producto',
      message: '¿Desea eliminar este producto?\n'
        + 'Codigo: ' + id,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelado');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
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
        }
      ]
    });
    await alert.present();
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
