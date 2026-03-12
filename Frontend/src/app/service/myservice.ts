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
  endpointsClientes = `${this.baseUrl}/api/clientes`;
  endpointsDetallePedido = `${this.baseUrl}/api/detallePedido`;
  endpointsDetalleProducto = `${this.baseUrl}/api/detalleProducto`;
  endpointsCentrosTrabajo = `${this.baseUrl}/api/centroTrabajo`;
  endpointsDepartamentos = `${this.baseUrl}/api/departamento`;
  endpointCargo = `${this.baseUrl}/api/cargos`;
  endpointWorker = `${this.baseUrl}/api/empleados`;
  endpointsOrdenesEntrega = `${this.baseUrl}/api/ordenesEntrega`;


  constructor(
    private http: HttpClient
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

  /**
 * ------------------------------------------------------------------------------------------------------------
 * FUNCIONES DE LOS PROVEEDORES | GET , PUT , POST , DELETE |
 * ------------------------------------------------------------------------------------------------------------
 */

  getProveedores() {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.get(this.endpointsProveedores, { headers });
  }

  postProveedores(proveedor: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.post(this.endpointsProveedores, proveedor, { headers });
  }

  putProveedores(id: string, proveedor: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.put(this.endpointsProveedores + '/' + id, proveedor, { headers });
  }

  deleteProveedores(id: string) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.delete(this.endpointsProveedores + '/' + id, { headers });
  }

  /**
* ------------------------------------------------------------------------------------------------------------
* FUNCIONES DE LOS CLIENTES | GET , PUT , POST , DELETE |
* ------------------------------------------------------------------------------------------------------------
*/

  getClientes() {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.get(this.endpointsClientes, { headers });
  }

  postClientes(cliente: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.post(this.endpointsClientes, cliente, { headers });
  }

  putClientes(id: string, cliente: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.put(this.endpointsClientes + '/' + id, cliente, { headers });
  }

  deleteClientes(id: string) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.delete(this.endpointsClientes + '/' + id, { headers });
  }
  /**
* ------------------------------------------------------------------------------------------------------------
* FUNCIONES DE LOS DETALLES DE LOS PRODUCTOS | GET , PUT , POST , DELETE |
* ------------------------------------------------------------------------------------------------------------
*/

  getDetalleProductos() {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.get(this.endpointsDetalleProducto, { headers });
  }

  postDetalleProductos(detalleProducto: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.post(this.endpointsDetalleProducto, detalleProducto, { headers });
  }

  putDetalleProductos(id: string, detalleProducto: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.put(this.endpointsDetalleProducto + '/' + id, detalleProducto, { headers });
  }

  deleteDetalleProductos(id: string) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.delete(this.endpointsDetalleProducto + '/' + id, { headers });
  }

  /**
* ------------------------------------------------------------------------------------------------------------
* FUNCIONES DE LOS CARGOS | GET , PUT , POST , DELETE |
* ------------------------------------------------------------------------------------------------------------
*/
  getCargos() {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.get(this.endpointCargo, { headers })
  }

  postCargo(cargo: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.post(this.endpointCargo, cargo, { headers })
  }

  putCargo(id: number, cargo: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.put(this.endpointCargo + '/' + id, cargo, { headers });
  }

  deleteCargo(id: number) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.delete(this.endpointCargo + '/' + id, { headers });
  }

  /**
   * ----------------------------------------------------------------------------------
   * FUNCIONES DE LOS TRABAJADORES | GET , PUT , POST , DELETE |
   * ----------------------------------------------------------------------------------
   */

  getAllWorkers() {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.get(this.endpointWorker, { headers })
  }

  postWorker(worker: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.post(this.endpointWorker, worker, { headers })
  }
  putWorker(id: number, worker: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.put(this.endpointWorker + '/' + id, worker, { headers });
  }

  deleteWorker(id: number) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.delete(this.endpointWorker + '/' + id, { headers });
  }

  /**
 * ------------------------------------------------------------------------------------------
 * FUNCIONES PARA LOS PEDIDOS |GET , POST , PUT , DELETE |
 * ---------------------------------------------------------------------------------------------
 * */
  getPedidos() {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.get(this.endpointsPedidos, { headers });
  }

  postPedidos(pedido: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.post(this.endpointsPedidos, pedido, { headers });
  }

  putPedidos(id: number, pedido: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.put(this.endpointsPedidos + '/' + id, pedido, { headers });
  }

  deletePedidos(id: number) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.delete(this.endpointsPedidos + '/' + id, { headers });
  }


  /**
 * ------------------------------------------------------------------------------------------
 * FUNCIONES PARA LOS DETALLES DE LOS PEDIDOS |GET , POST , PUT , DELETE |
 * ---------------------------------------------------------------------------------------------
 * */
  getDetallePedidos() {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.get(this.endpointsDetallePedido, { headers });
  }

  postDetallePedidos(detallePedido: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.post(this.endpointsDetallePedido, detallePedido, { headers });
  }

  putDetallePedidos(id: number, detallePedido: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.put(this.endpointsDetallePedido + '/' + id, detallePedido, { headers });
  }

  deleteDetallePedidos(id: number) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.delete(this.endpointsDetallePedido + '/' + id, { headers });
  }

  /**
 * ------------------------------------------------------------------------------------------
 * FUNCIONES PARA ORDENES DE ENTREGA |GET , POST , PUT , DELETE |
 * ---------------------------------------------------------------------------------------------
 * */
  getOrdenesEntrega() {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.get(this.endpointsOrdenesEntrega, { headers });
  }

  postOrdenesEntrega(ordenEntrega: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.post(this.endpointsOrdenesEntrega, ordenEntrega, { headers });
  }

  putOrdenesEntrega(id: number, ordenEntrega: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.put(this.endpointsOrdenesEntrega + '/' + id, ordenEntrega, { headers });
  }

  deleteOrdenesEntrega(id: number) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.delete(this.endpointsOrdenesEntrega + '/' + id, { headers });
  }
}




