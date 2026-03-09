import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertControl } from 'src/app/service/alert-control';
import { Myservice } from 'src/app/service/myservice';

@Component({
  selector: 'app-worker-category',
  templateUrl: './worker-category.page.html',
  styleUrls: ['./worker-category.page.scss'],
  standalone: false
})
export class WorkerCategoryPage implements OnInit {


  departamentos: any[] = [];
  centrosTrabajo: any[] = [];
  cargosEmpresa: any[] = [];



  //EDITAR TANTO DEPARTAMENTOS COMO CENTROS DE TRABAJO
  isEditingDepartamento: number | null = null;
  isEditingCentroTrabajo: number | null = null;
  isEditingCargoEmpresa: number | null = null;

  //VARIABLES PARA CREACION DE DEPARTAMENTOS
  departamento = {
    idDepartamento: 0,
    nombreDepartamento: ''
  }
  //VARIABLES PARA CREACION DE CENTRO DE TRABAJO
  centroTrabajo = {
    idCentro: 0,
    nombreCentro: ''
  }
  //VARIABLES PARA CREACION DE CARGO EN LA EMPRESA
  cargoEmpresa = {
    idCargo: 0,
    nombreCargo: ''
  }


  //VARIABLES DEL MODAL CARGO EN LA EMPRESA
  isModalOpenCargo: boolean = false;
  isModalCloseCargo: boolean = false;

  //VARIABLES DEL MODAL DEPARTAMENTO
  isModalOpenDepartamento: boolean = false;
  isModalCloseDepartamento: boolean = false;

  //VARIABLES DEL MODAL CENTRO
  isModalOpenCentro: boolean = false;
  isModalCloseCentro: boolean = false;

  constructor(
    private router: Router,
    private workerService: Myservice,
    private alert: AlertControl
  ) { }

  ngOnInit() {
    this.getDepartamentos();
    this.getCentrosTrabajo();
    this.getCargoEmpresa();
  }
  /**
   * --------------------------------------------------------------------------------------------
   * NOTA: SEPARAMOS LOS DOS OPEN Y CLOSE MODAL PARA NO CREAR NINGUN CONFLICTO CON NINGUNO
   * DE ELLOS PARA LA APERTURA Y CIERRE DE CADA DE UNOS DE ELLOS DADO QUE ESTA EN LA MISMA
   * PANTALLA SEPARADO CON SEGMENTOS 
   * 
   * ---------------------------------------------------------------------------------------------
   * APERTURA Y CIERRE DE LOS MODALS DE LOS DEPARTAMENTOS
   * -----------------------------------------------------------------------------------------
   */
  openModalDepartamento() {
    this.isModalOpenDepartamento = true;
  }

  closeModalDepartamento() {
    this.isModalCloseDepartamento = true;
    this.isModalOpenDepartamento = false;
    this.resetDepartamentos();
  }
  /**
  * --------------------------------------------------------------------------------------------
  * APERTURA Y CIERRE DE LOS MODALS DE LOS CENTROS
  * -----------------------------------------------------------------------------------------
  */
  openModalCentro() {
    this.isModalOpenCentro = true;
  }

  closeModalCentro() {
    this.isModalCloseCentro = true;
    this.isModalOpenCentro = false;
    this.resetCentroTrabajo();
  }
  /**
 * --------------------------------------------------------------------------------------------
 * APERTURA Y CIERRE DE LOS MODALS DE LOS CARGO EN LA EMPRESA
 * -----------------------------------------------------------------------------------------
 */
  openModalCargo() {
    this.isModalOpenCargo = true;
  }

  closeModalCargo() {
    this.isModalCloseCargo = true;
    this.isModalOpenCargo = false;
    this.resetCargos();
  }

  /**
   * -----------------------------------------------------------------------------------------------
   * VEMOS TODOS LO | GET | TANTO DE DEPARTAMENTO COMO DE CENTROS DE TRABAJO EN LOS LISTADOS
   * -----------------------------------------------------------------------------------------------
   */

  getDepartamentos() {
    this.workerService.getDepartamentos().subscribe({
      next: (res: any) => {
        this.departamentos = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  getCentrosTrabajo() {
    this.workerService.getCentrosTrabajo().subscribe({
      next: (res: any) => {
        this.centrosTrabajo = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
  getCargoEmpresa() {
    this.workerService.getCargos().subscribe({
      next: (res: any) => {
        this.cargosEmpresa = res;
      },
      error: (err: any) => {
        console.log(err)
      }
    });
  }

  /**
   * -----------------------------------------------------------------------------------------------
   * FUNCIONES CRUD PARA LOS  DEPARTAMENTOS | POST , PUT , DELETE |
   * -----------------------------------------------------------------------------------------------
   */
  //CREAMOS UNA FUNCION PARA EL CAMBIO DENTRO DEL MODEL CON DEPARTAMENTOS PARA PODER EDITAR Y AGREGAR EN EL MISMO MODEL
  editingDepartamento(departamentos: any) {
    this.departamento = {
      idDepartamento: departamentos.idDepartamento,
      nombreDepartamento: departamentos.nombreDepartamento,
    }
    this.isEditingDepartamento = departamentos.idDepartamento;
    this.openModalDepartamento();
  }
  //CREAMOS Y EDITAMOS EN LA MISMA FUNCION
  async createDepartamento() {
    if (!this.isEditingDepartamento) {
      this.workerService.postDepartamentos(this.departamento).subscribe({
        next: (res: any) => {
          console.log(res);
          this.getDepartamentos();
          this.closeModalDepartamento();
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    } else {
      const confirmado = await this.alert.alertControl('Editar Departamento', 'Está seguro de que desea editar este departamento?');
      if (confirmado) {
        this.workerService.putDepartamentos(this.departamento.idDepartamento, this.departamento).subscribe({
          next: (res: any) => {
            console.log(res);
            this.getDepartamentos();
            this.closeModalDepartamento();
          },
          error: (err: any) => {
            console.log(err);
          }
        });
      }

    }
  }

  //ELIMINAR DEPARTAMENTO
  async deleteDepartamento(id: number) {
    const confirmado = await this.alert.alertControl('Eliminar Departamento', '¿Quiere eliminar este departamento?');
    if (confirmado) {
      this.workerService.deleteDepartamentos(id).subscribe({
        next: (res: any) => {
          console.log(res);
          this.getDepartamentos();
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    }
  }
  /**
* -----------------------------------------------------------------------------------------------
* RESET DE LOS DEPARTAMENTOS
* -----------------------------------------------------------------------------------------------
*/
  resetDepartamentos() {

    this.departamento = {
      idDepartamento: 0,
      nombreDepartamento: ''
    }
    this.isEditingDepartamento = null;
  }

  /**
 * -----------------------------------------------------------------------------------------------
 * FUNCIONES CRUD PARA LOS  CENTRO DE TRABAJO | POST , PUT , DELETE |
 * -----------------------------------------------------------------------------------------------
 */

  editingCentroTrabajo(centro: any) {
    this.centroTrabajo = {
      idCentro: centro.idCentro,
      nombreCentro: centro.nombreCentro
    }
    this.isEditingCentroTrabajo = centro.idCentro
    this.openModalCentro();
  }

  async createCentroTrabajo() {
    if (!this.isEditingCentroTrabajo) {
      this.workerService.postCentrosTrabajo(this.centroTrabajo).subscribe({
        next: (res: any) => {
          console.log(res);
          this.getCentrosTrabajo();
          this.closeModalCentro();
        }
      });
    } else {
      const confirmado = await this.alert.alertControl('Editar Centro', '¿Quieres editar este centro?');
      if (confirmado) {
        this.workerService.putCentrosTrabajo(this.centroTrabajo.idCentro, this.centroTrabajo).subscribe({
          next: (res: any) => {
            console.log(res);
            this.getCentrosTrabajo();
            this.closeModalCentro();
          },
          error: (err: any) => {
            console.log(err);
          }
        });
      }
    }
  }

  //ELIMINAR DEPARTAMENTO
  async deleteCentroTrabajo(id: number) {
    const confirmado = await this.alert.alertControl('Eliminar centro', '¿Quieres eliminar este centro?');
    if (confirmado) {
      this.workerService.deleteCentrosTrabajo(id).subscribe({
        next: (res: any) => {
          console.log(res);
          this.getCentrosTrabajo();
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    }
  }



  /**
  * -----------------------------------------------------------------------------------------------
  * RESET DE LOS CENTROS DE TRABAJO
  * -----------------------------------------------------------------------------------------------
  */
  resetCentroTrabajo() {
    this.centroTrabajo = {
      idCentro: 0,
      nombreCentro: ''
    }
    this.isEditingCentroTrabajo = null;
  }
  /**
  * -----------------------------------------------------------------------------------------------
  * FUNCIONES CRUD DE LOS CARGOS EN LA EMPRESA | POST , PUT Y DELETE |
  * -----------------------------------------------------------------------------------------------
  */
  editingCargo(cargo: any) {
    this.cargoEmpresa = {
      idCargo: cargo.idCargo,
      nombreCargo: cargo.nombreCargo
    }
    this.isEditingCargoEmpresa = cargo.idCargo;
    this.openModalCargo();
  }

  async createCargoEmpresa() {
    if (!this.isEditingCargoEmpresa) {
      this.workerService.postCargo(this.cargoEmpresa).subscribe({
        next: (res: any) => {
          console.log(res);
          this.getCargoEmpresa();
          this.closeModalCargo();
        }
      });
    } else {
      const confirmado = await this.alert.alertControl('Editar Cargo', '¿Quieres editar este cargo?');
      if (confirmado) {
        this.workerService.putCargo(this.cargoEmpresa.idCargo, this.cargoEmpresa).subscribe({
          next: (res: any) => {
            console.log(res);
            this.getCargoEmpresa();
            this.closeModalCargo();
          },
          error: (err: any) => {
            console.log(err);
          }
        });
      }
    }
  }

  async deleteCargoEmpresa(id: number) {
    const confirmado = await this.alert.alertControl('Eliminar Cargo', '¿Quieres eliminar este cargo?');
    if (confirmado) {
      this.workerService.deleteCargo(id).subscribe({
        next: (res: any) => {
          console.log(res);
          this.getCargoEmpresa();
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    }
  }



  /**
  * -----------------------------------------------------------------------------------------------
  * RESET DE LOS CARGOS EN LA EMPRESA
  * -----------------------------------------------------------------------------------------------
  */
  resetCargos() {
    this.cargoEmpresa = {
      idCargo: 0,
      nombreCargo: ''
    }
    this.isEditingCargoEmpresa = null;
  }



  /**
  * -----------------------------------------------------------------------------------------------
  * ROUTER PARA LAS VENTANAS 
  * -----------------------------------------------------------------------------------------------
  */


  goToAdminHome() {
    this.router.navigateByUrl('/dashboard-control/admin-home');
  }

}
