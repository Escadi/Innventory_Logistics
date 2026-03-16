import { Component, OnInit } from '@angular/core';
import { Myservice } from '../service/myservice';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.page.html',
  styleUrls: ['./dashboard-page.page.scss'],
  standalone: false,
})
export class DashboardPagePage implements OnInit {
  productCount: number = 0;
  clientCount: number = 0;
  providerCount: number = 0;
  pendingOrdersCount: number = 0;
  isLoading: boolean = true;

  constructor(private myService: Myservice) { }

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    this.isLoading = true;

    // Fetch products count
    this.myService.getProductos().subscribe({
      next: (res: any) => {
        this.productCount = res.length;
      },
      error: (err) => console.error('Error loading products count', err)
    });

    // Fetch clients count
    this.myService.getClientes().subscribe({
      next: (res: any) => {
        this.clientCount = res.length;
      },
      error: (err) => console.error('Error loading clients count', err)
    });

    // Fetch providers count
    this.myService.getProveedores().subscribe({
      next: (res: any) => {
        this.providerCount = res.length;
      },
      error: (err) => console.error('Error loading providers count', err)
    });

    // Fetch pending orders count
    this.myService.getPedidos().subscribe({
      next: (res: any) => {
        const pending = res.filter((p: any) => p.estadoPedido === 'Pendiente');
        this.pendingOrdersCount = pending.length;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading orders count', err);
        this.isLoading = false;
      }
    });
  }

}
