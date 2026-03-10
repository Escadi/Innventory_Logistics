import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertControl } from 'src/app/service/alert-control';
import { Myservice } from 'src/app/service/myservice';
@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.page.html',
  styleUrls: ['./worker-list.page.scss'],
  standalone: false
})
export class WorkerListPage implements OnInit {
  workers: any[] = [];
  centrosTrabajo: any[] = [];
  departamentos: any[] = [];
  cargos: any[] = [];

  //VARIABLES PARA PODER ACTUALIZAR
  isEditEmpleado: number | null = null;


  //VARIABLES PARA EL MODAL 
  isModalOpen: boolean = false;
  isCloseModal: boolean = false;


  empleado = {
    idEmpleado: 0,
    nombre: '',
    apellido: '',
    telefono: '',
    direccion: '',
    email: '',
    idCentro: 0,
    idDepartamento: 0,
    idCargo: 0,
    rol: '',
    temporalPassword: ''

  };

  constructor(
    private router: Router,
    private myService: Myservice,
    private alertController: AlertControl
  ) { }

  ngOnInit() {
    this.getAll();
  }



  /**
   * ---------------------------------------------------------------------------------------
   * METODOS PARA EL MODAL
   * ---------------------------------------------------------------------------------------
   */
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.resetEmpleado();
  }


  /**
   * ------------------------------------------------------------------------------------------------
   * METODOS GET PARA VER TODOS LOS TRABAJADORES
   * -------------------------------------------------------------------------------------------------
   */

  getAll() {
    this.myService.getAllWorkers().subscribe({ // METODO GET PARA VER TODOS LOS TRABAJADORES
      next: (res: any) => {
        this.workers = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
    this.myService.getCentrosTrabajo().subscribe({ // METODO GET PARA VER TODOS LOS CENTROS DE TRABAJO
      next: (res: any) => {
        this.centrosTrabajo = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
    this.myService.getDepartamentos().subscribe({ // METODO GET PARA VER TODOS LOS DEPARTAMENTOS
      next: (res: any) => {
        this.departamentos = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
    this.myService.getCargos().subscribe({ // METODO GET PARA VER TODOS LOS CARGOS
      next: (res: any) => {
        this.cargos = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }


  /***
   * ----------------------------------------------------------------------------
   * METODOS PARA CRUD DE TODOS LOS EMPLEADOS | POST , PUT Y DELETE | 
   * LA VARIABLE CONFIRMADO ES UN CONTROLLADOR DE ALERTAS QUE SE LLAMA DESDE:
   * /SERVICE/ALERTCONTROL
   * ----------------------------------------------------------------------------
   */

  async createEmpleado() {
    if (!this.isEditEmpleado) {
      this.myService.postWorker(this.empleado).subscribe({
        next: (res: any) => {
          this.getAll();
          this.closeModal();

        },
        error: (err: any) => {
          console.log(err);
        }
      });
    } else {

      const confirmado = await this.alertController.alertControl('Editar Empleado', 'Está seguro de que desea editar este empleado?');
      if (confirmado) {
        this.myService.putWorker(this.empleado.idEmpleado, this.empleado).subscribe({
          next: (res: any) => {
            this.getAll();
            this.closeModal();

          },
          error: (err: any) => {
            console.log(err);
          }
        });
      }
    }
  }
  async deleteEmpleado(id: number) {
    const confirmado = await this.alertController.alertControl('Eliminar Empleado', 'Está seguro de que desea eliminar este empleado?');
    if (confirmado) {
      this.myService.deleteWorker(id).subscribe({
        next: (res: any) => {
          this.getAll();
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    }
  }

  editWorker(worker: any) {
    this.isEditEmpleado = worker.idEmpleado;
    this.empleado = {
      idEmpleado: worker.idEmpleado,
      nombre: worker.nombre,
      apellido: worker.apellido,
      telefono: worker.telefono,
      direccion: worker.direccion,
      email: worker.email,
      idCentro: worker.idCentro,
      idDepartamento: worker.idDepartamento,
      idCargo: worker.idCargo,
      rol: worker.rol,
      temporalPassword: worker.temporalPassword

    };
    this.openModal();
  }
  //RESET DE VARIABLES
  resetEmpleado() {
    this.empleado = {
      idEmpleado: 0,
      nombre: '',
      apellido: '',
      telefono: '',
      direccion: '',
      email: '',
      idCentro: 0,
      idDepartamento: 0,
      idCargo: 0,
      rol: '',
      temporalPassword: ''
    };
    this.isEditEmpleado = null;
  }




  goToAdminHome() {
    this.router.navigateByUrl('/dashboard-control/admin-home');
  }




}
