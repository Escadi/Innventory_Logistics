import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Myservice } from 'src/app/service/myservice';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.page.html',
  styleUrls: ['./vehicle-list.page.scss'],
  standalone: false
})
export class VehicleListPage implements OnInit {

  vehiculos: any[] = [];
  tipoVehiculos: any[] = [];


  vehiculo: any = {
    matricula: '',
    marca: '',
    modelo: '',
    color: '',
    idTipo: 0
  };

  //VARIABLES PARA EL MODAL
  isModalOpen = false;

  //VARIABLES PARA EL TOOGLE
  isChangeToogle: boolean = false;

  //VARIABLE PARA SABER SI ES ACTUALIZACION O CREACION
  isUpdateVehicle: boolean = false;

  constructor(
    private router: Router,
    private myservice: Myservice
  ) { }

  ngOnInit() {
    this.getAllData();
  }


  /*----------------------------------------------------------------------------------------
   * METODOS PARA EL MODAL
   * ----------------------------------------------------------------------------------------
   */
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  /*----------------------------------------------------------------------------------------
   * METODOS PARA LOS COLORES DE ION-CHIP DE ESTADOS
   * ----------------------------------------------------------------------------------------
   */
  getColorEstado(estado: string) {
    const color = estado.toLowerCase().trim();
    if (color === "activo") return "success";
    if (color === "inactivo") return "danger";
    return "primary";
  }

  /**
   * ----------------------------------------------------------------------------------------
   * METODOS GET PARA LLAMAR A VEHICULOS Y TIPO DE VEHICULOS
   * -----------------------------------------------------------------------------------------
   */

  getAllData() {
    this.myservice.getVehiculos().subscribe({
      next: (res: any) => {
        this.vehiculos = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
    this.myservice.getTipoVehiculo().subscribe({
      next: (res: any) => {
        this.tipoVehiculos = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  /**
   * ----------------------------------------------------------------------------------------
   * METODO PARA CREAR UN VEHICULO
   * -----------------------------------------------------------------------------------------
   */




  /**
   * ----------------------------------------------------------------------------------------
   * METODO PARA IR AL HOME DEL ADMIN
   * -----------------------------------------------------------------------------------------
   */
  goToAdminHome() {
    this.router.navigateByUrl('/dashboard-control/manage-home');
  }

}
