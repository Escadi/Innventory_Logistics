import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Myservice } from 'src/app/service/myservice';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.page.html',
  styleUrls: ['./client-list.page.scss'],
  standalone: false
})
export class ClientListPage implements OnInit {

  clientes: any[] = [];

  //VARIABLES PARA EL MODAL
  isModalOpen: boolean = false;
  isEditCliente: number | null = null;

  //VARIABLES CLIENTE PARA EL FORMULARIO
  cliente: any = {
    cifCliente: '',
    nombre: '',
    direccion: '',
    telefono: '',
    correo: '',
    codigoPostal: '',
    ciudad: '',
    pais: ''
  };


  constructor(
    private router: Router,
    private myService: Myservice,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.getAll();
  }

  /**
   * --------------------------------------------------------------------------------------------------------
   * FUNCIONES DEL MODAL PARA LOS BOTONES DE AGREGAR Y EDITAR CLIENTE
   * --------------------------------------------------------------------------------------------------------
   */
  openModal() {
    this.isModalOpen = true;

  }

  closeModal() {
    this.isModalOpen = false;
    this.ResetCliente();
  }


  /**
   * --------------------------------------------------------------------------------------------------------
   * FUNCIONES PARA VER TODOS LOS CLIENTES
   * --------------------------------------------------------------------------------------------------------
   */
  getAll() {

    this.myService.getClientes().subscribe({
      next: (res: any) => {
        this.clientes = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  /**
 * --------------------------------------------------------------------------------------------------------
 * FUNCIONES CRUD PARA LOS CLIENTES | POST , PUT , DELETE |
 * --------------------------------------------------------------------------------------------------------
 */
  //CREAR CLIENTE
  async createCliente() {
    if (!this.isEditCliente) {
      this.myService.postClientes(this.cliente).subscribe({
        next: (res: any) => {
          console.log(res);
          this.getAll();
          this.closeModal();
          this.ResetCliente();
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    } else {
      const alert = await this.alertController.create({
        header: 'Actualizando Cliente',
        message: '¿Desea actualizar este cliente?\n'
          + 'Cif: ' + this.cliente.cifCliente,
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
            text: 'Actualizar',
            handler: () => {
              this.myService.putClientes(this.cliente.cifCliente, this.cliente).subscribe({
                next: (res: any) => {
                  console.log(res);
                  this.getAll();
                  this.closeModal();
                  this.ResetCliente();
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
  }

  //ACTUALIZAR CLIENTE
  isUpdateCliente(clientes: any) {
    this.cliente = {
      cifCliente: clientes.cifCliente,
      nombre: clientes.nombre,
      direccion: clientes.direccion,
      telefono: clientes.telefono,
      correo: clientes.correo,
      codigoPostal: clientes.codigoPostal,
      ciudad: clientes.ciudad,
      pais: clientes.pais
    }
    this.isEditCliente = clientes.cifCliente;
    this.openModal();
  }

  async deleteCliente(id: string) {
    const alert = await this.alertController.create({
      header: 'Eliminando Cliente',
      message: '¿Desea eliminar este cliente?\n'
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
            this.myService.deleteClientes(id).subscribe({
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


  /**
   * --------------------------------------------------------------------------------------------------------
   * RESETEAMOS A CLIENTE
   * --------------------------------------------------------------------------------------------------------
   */
  ResetCliente() {
    this.cliente = {
      cifCliente: '',
      nombre: '',
      direccion: '',
      telefono: '',
      correo: '',
      codigoPostal: '',
      ciudad: '',
      pais: ''
    };
    this.isEditCliente = null;
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
