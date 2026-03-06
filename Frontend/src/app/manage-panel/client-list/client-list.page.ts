import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  isOpenModal: boolean = false;
  isEditModal: boolean = false;

  constructor(
    private router: Router,
    private myService: Myservice
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
    this.isOpenModal = true;
  }

  closeModal() {
    this.isOpenModal = false;
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
   * FUNCIONES PARA LA NAVEGACION
   * --------------------------------------------------------------------------------------------------------
   */
  goToAdminHome() {
    this.router.navigateByUrl('/dashboard-control/manage-home');
  }

}
