import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Myservice } from 'src/app/service/myservice';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.page.html',
  styleUrls: ['./provider-list.page.scss'],
  standalone: false
})
export class ProviderListPage implements OnInit {
  proveedores: any[] = [];
  selectedCategory: any[] = [];
  isChangeToogle: boolean = false;


  //VARIABLES PARA GUARDAR LOS PROVEDORES
  Proveedor: any = {
    CifProveedor: '',
    nombre: '',
    direccion: '',
    telefono: '',
    email: '',
    idCategoria: 0
  };


  //VARIABLE PARA EDITAR 
  updateProveedor: number | null = null;


  //VARIABLES DE LOS MODAL
  isModalOpen: boolean = false;

  constructor(
    private router: Router,
    private myService: Myservice,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.getAll();
  }

  ResetProveedor() {
    this.Proveedor = {
      CifProveedor: '',
      nombre: '',
      direccion: '',
      telefono: '',
      email: '',
      idCategoria: 0
    };
    this.updateProveedor = null;
  }

  /**
 * -----------------------------------------------------------------------------------------------------------
 * APERTURA Y CIERRE DE LOS MODALS
 * -----------------------------------------------------------------------------------------------------------
 */
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.ResetProveedor();

  }

  /**
   * -----------------------------------------------------------------------------------------------------------
   * VER A TODOS LOS PROVEEDORES
   * -----------------------------------------------------------------------------------------------------------
   */
  getAll() {
    // GET DE TODOS LOS PROVEEDORES
    this.myService.getProveedores().subscribe({
      next: (res: any) => {
        this.proveedores = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
    // GET DE TODAS LAS CATEGORIAS
    this.myService.getCategorias().subscribe({
      next: (res: any) => {
        this.selectedCategory = res
      },
      error: (err: any) => {
        console.log(err)
      }
    });
  }

  /**
  * -----------------------------------------------------------------------------------------------------------
  * CRUD DE LOS PROVEEDORES | POST , PUT , DELETE |
  * -----------------------------------------------------------------------------------------------------------
  */
  async createProveedor() {
    if (!this.updateProveedor) {
      this.myService.postProveedores(this.Proveedor).subscribe({
        next: (res: any) => {
          console.log(res);
          this.getAll();
          this.closeModal();
          this.ResetProveedor();
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    } else {
      this.myService.putProveedores(this.Proveedor.CifProveedor, this.Proveedor).subscribe({
        next: (res: any) => {
          console.log(res);
          this.getAll();
          this.closeModal();
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    }

  }
  editProveedor(proveedor: any) {
    this.Proveedor = {
      CifProveedor: proveedor.CifProveedor,
      nombre: proveedor.nombre,
      direccion: proveedor.direccion,
      telefono: proveedor.telefono,
      email: proveedor.email,
      idCategoria: proveedor.idCategoria
    };
    this.updateProveedor = proveedor.CifProveedor;
    this.openModal();
  }

  async deleteProveedor(id: string) {
    // ELIMINAMOS EL PRODUCTO CON EL BOTON QUE SE ENCUENTRA EN EL GRID
    const alert = await this.alertController.create({
      header: 'Eliminando Proveedor',
      message: '¿Desea eliminar este proveedor?\n'
        + 'Cif: ' + id,
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
            this.myService.deleteProveedores(id).subscribe({
              next: (res: any) => {
                console.log(res);
                this.getAll();
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


  goToAdminHome() {
    this.router.navigateByUrl('/dashboard-control/manage-home');
  }


}
