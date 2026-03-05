import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Myservice {
  baseUrl = environment.apiUrl;
  /**
   * ENDPOINTS DE LAS APIS
   */
  endpointsProductos = `${this.baseUrl}/api/producto`;
  endpointsUsuarios = `${this.baseUrl}/api/usuario`;
  endpointsPedidos = `${this.baseUrl}/api/pedido`;
  endpointsProveedores = `${this.baseUrl}/api/proveedor`;
  endpointsCategorias = `${this.baseUrl}/api/categoria`;
  endpointsClientes = `${this.baseUrl}/api/cliente`;
  endpointsDetallePedido = `${this.baseUrl}/api/detalle_pedido`;
  endpointsDetalleProducto = `${this.baseUrl}/api/detalle_producto`;
  endpointsDetalleProveedor = `${this.baseUrl}/api/detalle_proveedor`;
  endpointsDetalleCategoria = `${this.baseUrl}/api/detalle_categoria`;
  endpointsDetalleCliente = `${this.baseUrl}/api/detalle_cliente`;
  endpointsCentrosTrabajo = `${this.baseUrl}/api/centroTrabajo`;
  endpointsDepartamentos = `${this.baseUrl}/api/departamento`;


  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  /**
   * --------------------------------------------------------------------------------------------
   * METODOS PARA PRODUCTOS | GET,POST,PUT,DELETE |
   * --------------------------------------------------------------------------------------------
   */

  getProductos() {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.get(this.endpointsProductos, { headers });
  }

  postProductos(producto: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.post(this.endpointsProductos, producto, { headers });
  }

  putProductos(id: number, producto: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.put(this.endpointsProductos + '/' + id, producto, { headers });
  }

  deleteProductos(id: number) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.delete(this.endpointsProductos + '/' + id, { headers });
  }

  /**
   * -------------------------------------------------------------------------------------------
   * METODOS PARA CATEGORIA DE PRODUCTO | GET, POST ,PUT, DELETE |
   * -------------------------------------------------------------------------------------------
   */

  getCategorias() {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.get(this.endpointsCategorias, { headers });
  }

  postCategorias(categoria: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.post(this.endpointsCategorias, categoria, { headers });
  }

  putCategorias(id: number, categoria: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.put(this.endpointsCategorias + '/' + id, categoria, { headers });
  }

  deleteCategorias(id: number) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.delete(this.endpointsCategorias + '/' + id, { headers });
  }

  /**
   * -------------------------------------------------------------------------------------------
   * METODOS PARA CENTRO DE TRABAJO | GET, POST ,PUT, DELETE |
   * -------------------------------------------------------------------------------------------
   */

  getCentrosTrabajo() {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.get(this.endpointsCentrosTrabajo, { headers });
  }

  postCentrosTrabajo(centroTrabajo: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.post(this.endpointsCentrosTrabajo, centroTrabajo, { headers });
  }

  putCentrosTrabajo(id: number, centroTrabajo: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.put(this.endpointsCentrosTrabajo + '/' + id, centroTrabajo, { headers });
  }

  deleteCentrosTrabajo(id: number) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.delete(this.endpointsCentrosTrabajo + '/' + id, { headers });
  }

  /**
   * -------------------------------------------------------------------------------------------
   * METODOS PARA DEPARTAMENTO | GET, POST ,PUT, DELETE |
   * -------------------------------------------------------------------------------------------
   */

  getDepartamentos() {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.get(this.endpointsDepartamentos, { headers });
  }

  postDepartamentos(departamento: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.post(this.endpointsDepartamentos, departamento, { headers });
  }

  putDepartamentos(id: number, departamento: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.put(this.endpointsDepartamentos + '/' + id, departamento, { headers });
  }

  deleteDepartamentos(id: number) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.delete(this.endpointsDepartamentos + '/' + id, { headers });
  }

}
