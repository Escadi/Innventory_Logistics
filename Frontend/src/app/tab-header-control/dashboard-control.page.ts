import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertControl } from '../service/alert-control';
import { Myservice } from '../service/myservice';
import { CallData } from '../service/dataService/call-data';

@Component({
  selector: 'app-dashboard-control',
  templateUrl: './dashboard-control.page.html',
  styleUrls: ['./dashboard-control.page.scss'],
  standalone: false
})
export class DashboardControlPage implements OnInit {
  detallesPedido: any[] = [];
  detalleCarrito: any[] = [];
  cantidadFinal: number = 0;

  //Variables para el modal del carrito
  isModalOpen = false;


  constructor(
    private router: Router,
    private myService: Myservice,
    private alert: AlertControl,
    private dataService: CallData
  ) { }

  ngOnInit() {
    this.getAllData();
    // SUSCRIBIRSE A LOS CAMBIOS DE DATOS GLOBALES PARA QUE SE ACTUALICE EL CARRITO
    this.dataService.data$.subscribe((newData: any[]) => {
      this.detalleCarrito = newData;
    });
  }


  /**
   * -------------------------------------------------------------------------------------------------------------
   * APERTURA Y CIERRE DEL MODAL DE CARRITO
   * -------------------------------------------------------------------------------------------------------------
   */
  openModalCart() {
    this.isModalOpen = true;
  }

  closeModalCart() {
    this.isModalOpen = false;
  }

  /***
   * ----------------------------------------------------------------------------------------------------
   * FUNCION DEL ION MODAL PARA EL CARRITO
   * ----------------------------------------------------------------------------------------------------
   */
  btnAdd(item: any) {
    item.cantidad++;

  }

  btnRemove(item: any) {
    if (item.cantidad > 1) {
      item.cantidad--;

    }
  }


  /**
   * ----------------------------------------------------------------------------------------------------
   * FUNCION GET DE DETALLES CARRITO PARA VER TODO EL CARRITO
   * ----------------------------------------------------------------------------------------------------
   */
  getAllData() {

    this.myService.getDetallesCarrito().subscribe({
      next: (res: any) => {
        this.dataService.setData(res);
        console.log("Datos del carrito cargados:", res);
      },
      error: (err: any) => {
        console.log(err)
      }
    });
  }


  /**
   * ----------------------------------------------------------------------------------------------------
   * FUNCIONES CRUD DE DETALLES CARRITO | PUT, POST, DELETE|
   * ----------------------------------------------------------------------------------------------------
   */

  deleteDetalleCarrito(id: number) {
    this.myService.deleteDetallesCarrito(id).subscribe({
      next: (res: any) => {
        this.getAllData();
      },
      error: (err: any) => {
        console.log(err)
      }
    });
  }


  /**
   * ----------------------------------------------------------------------------------------------------
   * FUNCION LOGOUT
   * ----------------------------------------------------------------------------------------------------
   */
  getOut() {
    this.router.navigateByUrl('/login-page');
  }

}
