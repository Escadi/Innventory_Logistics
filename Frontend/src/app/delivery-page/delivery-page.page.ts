import { Component, OnInit } from '@angular/core';
import { Myservice } from '../service/myservice';
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';

@Component({
  selector: 'app-delivery-page',
  templateUrl: './delivery-page.page.html',
  styleUrls: ['./delivery-page.page.scss'],
  standalone: false
})
export class DeliveryPagePage implements OnInit {

  pedidos: any[] = [];
  ordenesEntrega: any[] = [];
  scannedId = '';
  searchText = '';



  // VARIABLE PARA CAMBIAR DE GRID A LIST
  isChangeToogle: boolean = false;
  constructor(
    private myService: Myservice
  ) { }

  ngOnInit() {
    this.getAllData();
  }


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


  getAllData() {
    this.myService.getPedidos().subscribe({
      next: (res: any) => {
        this.pedidos = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
    this.myService.getOrdenesEntrega().subscribe({
      next: (res: any) => {
        this.ordenesEntrega = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

}
