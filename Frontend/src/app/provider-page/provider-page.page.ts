import { Component, OnInit } from '@angular/core';
import { Myservice } from '../service/myservice';

@Component({
  selector: 'app-provider-page',
  templateUrl: './provider-page.page.html',
  styleUrls: ['./provider-page.page.scss'],
  standalone: false
})
export class ProviderPagePage implements OnInit {

  //VARIABLES PARA PROVEEDORES Y CATEGORIAS
  proveedores: any[] = [];
  selectedCategory: any[] = [];


  //VARIABLES FILTROS
  filtroProveedores: any[] = [];
  filtroCategorias: any[] = [];
  filtroSegmento: number = 0;
  searchText: string = "";

  //VARIABLES PARA EL TOOGLE
  isChangeToogle: boolean = false;


  constructor(
    private myService: Myservice
  ) { }

  ngOnInit() {
    this.getAllData();
  }

  /***
   * ---------------------------------------------------------------------------------------------
   * FILTRAR PRODUCTOS POR BUSQUEDA (NOMBRE O CODIGO) MANTENIENDO EL FILTRO DE CATEGORIAS
   * ---------------------------------------------------------------------------------------------
   */
  filterProveedor(event: any) {
    this.searchText = event.target.value?.toLowerCase() || "";
    this.aplicarFiltros(this.searchText, this.filtroSegmento);
  }

  /***
   * ---------------------------------------------------------------------------------------------
   * FILTRAR PRODUCTOS AL CAMBIAR EL SEGMENTO DE CATEGORIAS
   * ---------------------------------------------------------------------------------------------
   */
  filterProductsBySegment(event: any) {
    this.filtroSegmento = event.detail.value;
    this.aplicarFiltros(this.searchText, this.filtroSegmento);
  }

  /***
   * ---------------------------------------------------------------------------------------------
   * FUNCIÓN CENTRAL DE FILTRADO (TANTO LA BUSQUEDA DE TEXTO COMO LA DEL SEGMENTO)
   * ---------------------------------------------------------------------------------------------
   */
  aplicarFiltros(filtroTexto: string, idCategoria: number) {
    this.filtroProveedores = this.proveedores.filter((proveedor: any) => {
      //Validamos el  texto
      const nombre = proveedor.nombre?.toLowerCase() || "";
      const codigo = proveedor.CifProveedor?.toString().toLowerCase() || "";
      const telefono = proveedor.telefono?.toString() || "";
      const coincideTexto = !filtroTexto || nombre.includes(filtroTexto) || codigo.includes(filtroTexto) || telefono.includes(filtroTexto);

      /**
       * ----------------------------------------------------------------------------------------------------
       * VALIDAMOS LA CATEGORIA (SI ES 0 O INDEFINIDO, MOSTRAMOS TODOS)
       * NOTA: COMPARAMOS CONVIRTIENDO A STRING O NUMBER PARA EVITAR PROBLEMAS DE TIPOS DE LA BD
       * ---------------------------------------------------------------------------------------------------- 
       */
      const coincideCategoria = !idCategoria || idCategoria == 0 || proveedor.idCategoria == idCategoria;
      return coincideTexto && coincideCategoria;
    });
  }

  /**
   * --------------------------------------------------------------------------------------------------
   * LLAMAR A TODOS LOS GET DE PROVEEDORES Y DE CATEGORIAS 
   * --------------------------------------------------------------------------------------------------
   */

  getAllData() {

    this.myService.getProveedores().subscribe({
      next: (res: any) => {
        this.proveedores = res;
        this.filtroProveedores = res;
      }
    });
    this.myService.getCategorias().subscribe({
      next: (res: any) => {
        this.selectedCategory = res;
        this.filtroCategorias = res;
      }
    });


  }






}
