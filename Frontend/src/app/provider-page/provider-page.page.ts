import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-page',
  templateUrl: './provider-page.page.html',
  styleUrls: ['./provider-page.page.scss'],
  standalone: false
})
export class ProviderPagePage implements OnInit {

  providers: any[] = [
    {
      id: 1,
      name: 'Proveedor 1',
      email: 'proveedor1@gmail.com',
      phone: '123456789',
      address: 'Calle 123',
      city: 'Ciudad 1',
      state: 'Estado 1',
      zip: '12345',
      country: 'Pais 1'
    },
    {
      id: 2,
      name: 'Proveedor 2',
      email: 'proveedor2@gmail.com',
      phone: '123456789',
      address: 'Calle 123',
      city: 'Ciudad 1',
      state: 'Estado 1',
      zip: '12345',
      country: 'Pais 1'
    },
    {
      id: 3,
      name: 'Proveedor 3',
      email: 'proveedor3@gmail.com',
      phone: '123456789',
      address: 'Calle 123',
      city: 'Ciudad 1',
      state: 'Estado 1',
      zip: '12345',
      country: 'Pais 1'
    }
  ];

  constructor() { }

  ngOnInit() {
  }






}
