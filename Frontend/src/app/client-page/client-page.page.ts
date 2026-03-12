import { Component, OnInit } from '@angular/core';
import { Myservice } from '../service/myservice';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.page.html',
  styleUrls: ['./client-page.page.scss'],
  standalone: false
})
export class ClientPagePage implements OnInit {
  clientes: any[] = [];

  //VARIABLES PARA EL MODAL
  isModalOpen: boolean = false;
  isEditCliente: number | null = null;
  isChangeToogle: boolean = false;

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

    private myService: Myservice,

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

}
