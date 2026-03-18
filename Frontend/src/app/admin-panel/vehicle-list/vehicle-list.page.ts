import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertControl } from 'src/app/service/alert-control';
import { Myservice } from 'src/app/service/myservice';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.page.html',
  styleUrls: ['./vehicle-list.page.scss'],
  standalone: false
})
export class VehicleListPage implements OnInit {

  /**---------------------------------------------------------------------------------------------
   * VARIABLES PARA EL ESTADO DEL VEHICULO
   * ---------------------------------------------------------------------------------------------
   */
  estados: string[] = [
    'inactivo',
    'mantenimiento',
    'fuera de servicio',
    'disponible',
    'ocupado'
  ];

  /**---------------------------------------------------------------------------------------------
   * VARIABLES PARA LLAMAR A LOS OBJETOS VEHICULOS Y TIPO DE VEHICULOS
   * ---------------------------------------------------------------------------------------------
   */
  vehiculos: any[] = [];
  tipoVehiculos: any[] = [];
  filtroDeVehiculos: any[] = [];
  filtroDeConductores: any[] = [];
  vehiculoConductores: any[] = [];


  /**---------------------------------------------------------------------------------------------
   * VARIABLES PARA EL FORMULARIO DEL VEHICULO
   * ---------------------------------------------------------------------------------------------
   */
  matricula: string = '';
  marca: string = '';
  modelo: string = '';
  color: string = '';
  estado: string = '';
  idTipo: number = 0;

  /**---------------------------------------------------------------------------------------------
   * VARIABLES PARA EL FORMULARIO DEL CONDUCTOR
   * ---------------------------------------------------------------------------------------------
   */
  fechaDevolucionVehiculo: Date = new Date();

  /**---------------------------------------------------------------------------------------------
   * VARIABLES PARA EL FORMULARIO DEL TIPO DE VEHICULO
   * ---------------------------------------------------------------------------------------------
   */
  tipoVehiculo: string = '';


  /**---------------------------------------------------------------------------------------------
   * VARIABLES PARA EL MODAL
   * ---------------------------------------------------------------------------------------------
   */
  isModalOpen = false;
  isModalOpenConductor = false;

  /**---------------------------------------------------------------------------------------------
   * VARIABLES PARA EL TOOGLE
   * ---------------------------------------------------------------------------------------------
   */
  isChangeToogle: boolean = false;

  /**---------------------------------------------------------------------------------------------
   * VARIABLE PARA SABER SI ES ACTUALIZACION O CREACION
   * ---------------------------------------------------------------------------------------------
   */
  isUpdateVehicle: boolean = false;


  constructor(
    private router: Router,
    private myservice: Myservice,
    private alertController: AlertControl
  ) { }

  ngOnInit() {
    this.getAllData();
  }

  /**
   * -------------------------------------------------------------------------------------------
   * FUNCIÓN PARA FILTRAR EL CONDUCTOR VINCULADO A ESE VEHICULO EN SU HORA DE SERVICIO
   * --------------------------------------------------------------------------------------------
   */
  conductorFiltro(matricula: string) {
    const filtro = this.vehiculoConductores.filter((vehiculoConductor: any) => {
      //this.filtroDeConductores = vehiculoConductor.matricula === matricula;
      this.fechaDevolucionVehiculo = vehiculoConductor.fechaDevolucionVehiculo;
    });

    console.log(this.filtroDeConductores);
    this.openModalConductor();
  }


  /*----------------------------------------------------------------------------------------
   * METODOS PARA EL MODAL TANTO ABRIR COMO CERRAR
   * ----------------------------------------------------------------------------------------
   */
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.resetData();
  }
  openModalConductor() {
    this.isModalOpenConductor = true;
  }
  closeModalConductor() {
    this.isModalOpenConductor = false;
  }

  /**---------------------------------------------------------------------------------------------
   * METODO PARA RESETEAR EL FORMULARIO PARA EVITAR ERRORES
   * ---------------------------------------------------------------------------------------------
   */
  resetData() {
    this.matricula = '';
    this.marca = '';
    this.modelo = '';
    this.color = '';
    this.estado = '';
    this.idTipo = 0;
    this.isUpdateVehicle = false;
  }

  /*----------------------------------------------------------------------------------------
   * METODOS PARA LOS COLORES DE ION-CHIP DE ESTADOS
   * ----------------------------------------------------------------------------------------
   */
  getColorEstado(estado: string) {
    const color = estado.toLowerCase().trim();
    if (color === "activo") return "success";
    if (color === "inactivo") return "danger";
    if (color === "mantenimiento") return "warning";
    if (color === "fuera de servicio") return "danger";
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
        this.filtroDeVehiculos = res;
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
    this.myservice.getVehiculoConductor().subscribe({
      next: (res: any) => {
        this.vehiculoConductores = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  /**
   * ----------------------------------------------------------------------------------------
   * METODO PARA CREAR UN VEHICULO Y TIPO DE VEHICULO DENTRO DEL ION-MODAL
   * -----------------------------------------------------------------------------------------
   */
  createVehicle() {
    const vehiculo: any = {
      matricula: this.matricula,
      marca: this.marca,
      modelo: this.modelo,
      color: this.color,
      estado: this.estado,
      idTipo: this.idTipo
    };
    if (this.isUpdateVehicle) {
      this.myservice.putVehiculos(this.matricula, vehiculo).subscribe({
        next: (res: any) => {
          this.getAllData();
          this.closeModal();
          console.log("vehiculo actualizado:" + res);
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    } else {
      this.myservice.postVehiculos(vehiculo).subscribe({
        next: (res: any) => {
          this.getAllData();
          this.closeModal();
          console.log("vehiculo creado:" + res);
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    }
  }

  createTipoVehiculo() {// CREAMOS EL TIPO DE VEHICULO
    const tipoVehiculo: any = {
      tipoVehiculo: this.tipoVehiculo
    };
    this.myservice.postTipoVehiculo(tipoVehiculo).subscribe({
      next: (res: any) => {
        this.getAllData();
        this.closeModal();
        console.log("tipo de vehiculo creado:" + res);
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  /**
  * ----------------------------------------------------------------------------------------
  * METODO PARA ACTUALIZAR UN VEHICULO QUE SE ES EL QUE ABRE A PARTIR DEL BOTON EDITAR
  * -----------------------------------------------------------------------------------------
  */
  updateVehiculoData(vehiculo: any) {
    this.matricula = vehiculo.matricula,
      this.marca = vehiculo.marca,
      this.modelo = vehiculo.modelo,
      this.color = vehiculo.color,
      this.estado = vehiculo.estado,
      this.idTipo = vehiculo.idTipo,
      this.isUpdateVehicle = true;
    this.openModal();
  }
  /**
  * ----------------------------------------------------------------------------------------
  * METODO PARA ELIMINAR UN VEHICULO Y  | EL TIPO DE VEHICULO DENTRO DEL ION-MODAL |S
  * -----------------------------------------------------------------------------------------
  */

  async deleteVehicle(matricula: string) {
    const confirmado = await this.alertController.alertControl('¿Estas seguro de eliminar el vehiculo?', 'El vehiculo sera eliminado permanentemente');
    if (confirmado) {
      this.myservice.deleteVehiculos(matricula).subscribe({
        next: (res: any) => {
          this.getAllData();
          console.log("vehiculo eliminado:" + res);
        },
        error: (err: any) => {
          console.log(err);
        }
      });

    }
  }
  async deleteTipoVehiculo(idTipo: number) {
    const confirmado = await this.alertController.alertControl('¿Estas seguro de eliminar el tipo de vehiculo?', 'El tipo de vehiculo sera eliminado permanentemente');
    if (confirmado) {
      this.myservice.deleteTipoVehiculo(idTipo).subscribe({
        next: (res: any) => {
          this.getAllData();
          console.log("tipo de vehiculo eliminado:" + res);
        },
        error: (err: any) => {
          console.log(err);
        }
      });

    }
  }




  /**
   * ----------------------------------------------------------------------------------------
   * METODO PARA IR AL HOME DEL ADMIN
   * -----------------------------------------------------------------------------------------
   */
  goToAdminHome() {
    this.router.navigateByUrl('/dashboard-control/manage-home');
  }

}
