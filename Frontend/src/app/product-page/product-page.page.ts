import { Component, OnInit } from '@angular/core';
import { Myservice } from '../service/myservice';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss'],
  standalone: false
})
export class ProductPagePage implements OnInit {
  //VARIABLES PARA EL FILTRO DE CATEGORIAS
  selectedCategory: any[] = [];
  detalleProductos: any[] = [];
  fitroDetalleProducto: any[] = [];
  filtroProductoCentro: any[] = [];
  filtroSegmento: number = 0;



  //VARIABLES PARA EL MODAL
  isModalOpen: boolean = false;

  //VARIABLES PARA EL TOOGLE QUE SE LLAMA DESDE EL HTML PARA CAMBIAR LA VISTA DE LOS PRODUCTOS
  isChangeToogle: boolean = false;

  constructor(
    private myservice: Myservice
  ) { }

  ngOnInit() {
    this.getAllData();
  }

  /***
   * FILTRAR PRODUCTOS POR BUSQUEDA (NOMBRE O CODIGO) MANTENIENDO EL FILTRO DE CATEGORIAS
   */
  filterProducts(event: any) {
    const filtro = event.target.value?.toLowerCase() || "";
    this.aplicarFiltros(filtro, this.filtroSegmento);
  }

  /***
   * FILTRAR PRODUCTOS AL CAMBIAR EL SEGMENTO DE CATEGORIAS
   */
  filterProductsBySegment(event: any) {
    this.filtroSegmento = event.detail.value;

    // Obtener el valor del buscador si es que la barra existe 
    // (podemos buscarlo directo del DOM o guardarlo en una variable, 
    // pero aquí asumimos string vacío si no se usa Two-Way Binding en el searchbar)
    const searchbar = document.querySelector('ion-searchbar') as HTMLIonSearchbarElement;
    const filtroTexto = searchbar && searchbar.value ? searchbar.value.toLowerCase() : "";

    this.aplicarFiltros(filtroTexto, this.filtroSegmento);
  }

  /***
   * FUNCIÓN CENTRAL DE FILTRADO (Aplica tanto la búsqueda de texto como la del segmento)
   */
  aplicarFiltros(filtroTexto: string, idCategoria: number) {
    this.fitroDetalleProducto = this.detalleProductos.filter((productos: any) => {
      // 1. Validar texto
      const nombre = productos.producto.nombreProducto?.toLowerCase() || "";
      const codigo = productos.producto.idProducto?.toString().toLowerCase() || "";
      const coincideTexto = !filtroTexto || nombre.includes(filtroTexto) || codigo.includes(filtroTexto);

      // 2. Validar categoría (Si es 0 o indefinido, mostramos todos)
      // Nota: Comparamos convirtiendo a String o Number para evitar problemas de tipos de la BD
      const coincideCategoria = !idCategoria || idCategoria == 0 || productos.producto.idCategoria == idCategoria;

      return coincideTexto && coincideCategoria;
    });
  }

  /*
   * ---------------------------------------------------------------------------------------------
   * FILTRO PARA VER LOS CENTRO QUE TIENEN ESE PRODUCTO DESDE EL OJO DE LOS CARD
   * Y DE LA LISTA DE DETALLES
   * ---------------------------------------------------------------------------------------------
   */

  //VARIABLE DE LOS DETALLES DE LOS PRODUCTOS
  idProducto: number = 0;
  nombreProducto: string = '';


  openModalCentro(producto: any) {
    this.idProducto = producto.idProducto;
    // Asignamos el nombre del producto principal para mostrar en lo alto del modal
    this.nombreProducto = producto.producto?.nombreProducto || "";

    // Filtramos la lista completa de detalles para encontrar todos los que tengan el mismo idProducto
    this.filtroProductoCentro = this.detalleProductos.filter((detalle: any) => {
      return detalle.producto.idProducto === this.idProducto;
    });
    console.log(this.filtroProductoCentro);

    this.openModal();
  }

  /**
   * -----------------------------------------------------------------------------------------
   * METODOS PARA EL MANEJO DEL MODAL
   * -----------------------------------------------------------------------------------------
   */
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  /**
   * --------------------------------------------------------------------------------------------------------
   * FUNCIONES PARA OBTENER LOS GET DE CADA UNO DE LAS FUNCIONALIDADES 
   * --------------------------------------------------------------------------------------------------------
   */

  getAllData() {
    this.myservice.getDetalleProductos().subscribe({ //OBTENER LOS PRODUCTOS
      next: (res: any) => {
        this.detalleProductos = res;
        this.fitroDetalleProducto = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });

    this.myservice.getCategorias().subscribe({ //OBTENER LAS CATEGORIAS
      next: (res: any) => {
        this.selectedCategory = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });

  }
}
