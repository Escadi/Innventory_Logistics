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
  //VARIABLES PARA EL FILTRO DE CATEGORIAS
  selectedCategory: any[] = [
    {
      id: 1,
      valor: 'todos',
      nombre: 'Todos'
    },
    {
      id: 2,
      valor: 'papeleria',
      nombre: 'Papeleria'
    },
    {
      id: 3,
      valor: 'limpieza',
      nombre: 'Limpieza'
    },
    {
      id: 4,
      valor: 'alimentacion',
      nombre: 'Alimentacion'
    },
    {
      id: 5,
      valor: 'merchandising',
      nombre: 'Merchandising'
    },
  ];

  constructor() { }

  ngOnInit() {
  }






}
