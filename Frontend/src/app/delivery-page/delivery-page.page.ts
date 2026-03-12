import { Component, OnInit } from '@angular/core';
import { Myservice } from '../service/myservice';
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertControl } from '../service/alert-control';

@Component({
  selector: 'app-delivery-page',
  templateUrl: './delivery-page.page.html',
  styleUrls: ['./delivery-page.page.scss'],
  standalone: false
})
export class DeliveryPagePage implements OnInit {

  pedidos: any[] = [];
  ordenesEntrega: any[] = [];
  centrosTrabajo: any[] = [];
  clientes: any[] = [];
  conductores: any[] = [];
  filtroOrdenesEntrega: any[] = [];
  scannedId = '';
  searchText = '';
  estados: string[] = [
    'Pendiente',
    'En proceso',
    'Enviado',
    'Entregado',
    'Cancelado'
  ];

  //VARIABLE PARA EL ION MODAL DE ORDENES DE ENTREGA
  isModalOpen: boolean = false;
  isModalOpenUpdate: boolean = false;

  //VARIABLE PARA OBTENER EL ID DEL PEDIDO
  idPedidoData: string = '';
  idCliente: string = '';
  idCentro: string = '';
  idEmpleado: string = '';
  fechaPedido: string = '';
  estado: string = '';

  // VARIABLE PARA CAMBIAR DE GRID A LIST
  isChangeToogle: boolean = false;


  constructor(
    private myService: Myservice,
    private alert: AlertControl
  ) { }

  ngOnInit() {
    this.getAllData();
  }
  /**
   * ------------------------------------------------------------------------------------
   * FUNCIONES PARA ABRIR Y CERRAR EL ION MODAL DE ACTUALIZACION DE PEDIDO
   * ------------------------------------------------------------------------------------
   */
  //METODO PARA ABRIR EL ION MODAL DE ACTUALIZACION DE PEDIDO
  openModalUpdate() {
    this.isModalOpenUpdate = true;
  }
  //METODO PARA CERRAR EL ION MODAL DE ACTUALIZACION DE PEDIDO
  closeModalUpdate() {
    this.isModalOpenUpdate = false;
  }

  //METODO PARA ABRIR EL ION MODAL DE ORDENES DE ENTREGA
  openModal() {
    this.isModalOpen = true;
  }

  //METODO PARA CERRAR EL ION MODAL DE ORDENES DE ENTREGA
  closeModal() {
    this.isModalOpen = false;
  }

  /**
     * ------------------------------------------------------------------------------------------------------
     * GET DE TODOS LOS DATOS DE LOS ESTADOS DE LAS PETICIONES (COLORES PARA EL FRONTEND)
     * -------------------------------------------------------------------------------------------------------
     */
  getStatusColor(status: string): string {
    status = status?.toLowerCase();
    if (status === 'pendiente') return 'warning';
    if (status == 'en proceso') return 'primary';
    if (status === 'enviado') return 'tertiary';
    if (status === 'cancelado') return 'danger';
    if (status === 'entregado') return 'success';
    return 'medium';
  }

  /**
   * ------------------------------------------------------------------------------------
   * FUNCIÓN PARA FILTRAR LOS PEDIDOS POR BUSQUEDA (NOMBRE O CODIGO)
   * ------------------------------------------------------------------------------------
   */
  openModalOrdenesEntrega(id: string) {
    this.idPedidoData = id;

    this.filtroOrdenesEntrega = this.ordenesEntrega.filter((orden: any) => {
      return orden.idPedido === this.idPedidoData;
    });
    console.log(this.filtroOrdenesEntrega);

    this.openModal();
  }

  /**
   * ------------------------------------------------------------------------------------
   * FUNCIÓN PARA ESCANEAR EL CODIGO QR DEL PEDIDO DESDE CUALQUIER DISPOSITIVO
   * ------------------------------------------------------------------------------------
   */
  async scanPedido() {
    // Solicitar permiso
    const status = await BarcodeScanner.checkPermissions();
    if (status.camera !== 'granted') {
      const requestStatus = await BarcodeScanner.requestPermissions();
      if (requestStatus.camera !== 'granted') {
        console.error('Camera permission not granted');
        return;
      }
    }
    // Iniciar escaneo
    const { barcodes } = await BarcodeScanner.scan();
    if (barcodes.length > 0) {
      const content = barcodes[0].displayValue;
      console.log(content); // ID del pedido
      this.scannedId = content;
      this.trackPedido(content); // Llamar API para ver estado
    }
  }

  trackPedido(id: string) {
    // Buscar el pedido en el listado local
    const pedido = this.pedidos.find(p => String(p.idPedido) === String(id));
    if (pedido) {
      console.log('Pedido encontrado:', pedido);
      alert(`Pedido ${id} encontrado. Estado: ${pedido.estado}`);
    } else {
      console.log('Pedido no encontrado');
      alert(`Pedido ${id} no encontrado en el listado actual.`);
    }
  }

  /**
   * ------------------------------------------------------------------------------------
   * FUNCIONES PARA OBTENER LOS GET DE CADA UNO DE LAS FUNCIONALIDADES 
   * ------------------------------------------------------------------------------------
   */
  getAllData() {
    this.myService.getPedidos().subscribe({ // GET DE TODOS LOS PEDIDOS
      next: (res: any) => {
        this.pedidos = res;

      },
      error: (err: any) => {
        console.log(err);
      }
    });
    this.myService.getOrdenesEntrega().subscribe({ // GET DE LOS ORDEN DE ENTREGA
      next: (res: any) => {
        this.ordenesEntrega = res;
        this.filtroOrdenesEntrega = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
    this.myService.getCentrosTrabajo().subscribe({ // GET DE LOS CENTROS DE TRABAJO
      next: (res: any) => {
        this.centrosTrabajo = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
    this.myService.getClientes().subscribe({ // GET DE LOS CLIENTES
      next: (res: any) => {
        this.clientes = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });

  }
  /**
 * ------------------------------------------------------------------------------------
 * FUNCIONES CRUD DE LOS PEDIDOS | PUT , DELETE | 
 * ------------------------------------------------------------------------------------
 */
  isUpdatePedido(pedido: any) {
    this.idPedidoData = pedido.idPedido;
    this.idCliente = pedido.idCliente;
    this.idCentro = pedido.idCentro;
    this.idEmpleado = pedido.idEmpleado;
    this.fechaPedido = pedido.fechaPedido;
    this.estado = pedido.estado;
    this.openModalUpdate();
  }


  async onUpdate() {
    const pedidoUpdate = {
      idCliente: this.idCliente,
      idCentro: this.idCentro,
      estado: this.estado
    };
    await this.updatePedido(this.idPedidoData, pedidoUpdate);
    this.closeModalUpdate();
  }

  async updatePedido(idPedido: string, pedido: any) {
    const confirmado = await this.alert.alertControl('Actualizar Pedido', '¿Estas seguro de actualizar el pedido?');
    if (confirmado) {
      this.myService.putPedidos(idPedido, pedido).subscribe({
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
  async deletePedido(id: string) {
    const confirmado = await this.alert.alertControl('Eliminar Pedido', '¿Estas seguro de eliminar el pedido?');
    if (confirmado) {
      this.myService.deletePedidos(id).subscribe({
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

}
