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
  endpointsDetalleCarrito = `${this.baseUrl}/api/detalleCarrito`;
  endpointsCentrosTrabajo = `${this.baseUrl}/api/centroTrabajo`;
  endpointsDepartamentos = `${this.baseUrl}/api/departamento`;
  endpointCargo = `${this.baseUrl}/api/cargos`;
  endpointWorker = `${this.baseUrl}/api/empleados`;
  endpointsOrdenesEntrega = `${this.baseUrl}/api/ordenesEntrega`;
  endpointsConductor = `${this.baseUrl}/api/conductor`;
  endpointsTipoVehiculo = `${this.baseUrl}/api/tipoVehiculo`;
  endpointsVehiculos = `${this.baseUrl}/api/vehiculo`;
  endpointsVehiculoConductor = `${this.baseUrl}/api/vehiculoConductor`;


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

  putPedidos(id: string, pedido: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.put(this.endpointsPedidos + '/' + id, pedido, { headers });
  }

  deletePedidos(id: string) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.delete(this.endpointsPedidos + '/' + id, { headers });
  }

  generateQR(id: string) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.post(this.endpointsPedidos + '/generateQR/' + id, { headers });
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
 * FUNCIONES PARA DETALLES DEL CARRITO |GET , POST , PUT , DELETE |
 * ---------------------------------------------------------------------------------------------
 * */
  getDetallesCarrito() {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.get(this.endpointsDetalleCarrito, { headers });
  }
  postDetallesCarrito(detalleCarrito: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.post(this.endpointsDetalleCarrito, detalleCarrito, { headers });
  }

  putDetallesCarrito(id: number, detalleCarrito: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.put(this.endpointsDetalleCarrito + '/' + id, detalleCarrito, { headers });
  }

  deleteDetallesCarrito(id: number) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.delete(this.endpointsDetalleCarrito + '/' + id, { headers });
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

  /**
 * ------------------------------------------------------------------------------------------
 * FUNCIONES PARA CONDUCTORES |GET , POST , PUT , DELETE |
 * ---------------------------------------------------------------------------------------------
 * */
  getConductor() {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.get(this.endpointsConductor, { headers });
  }

  postConductor(conductor: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.post(this.endpointsConductor, conductor, { headers });
  }

  putConductor(id: number, conductor: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.put(this.endpointsConductor + '/' + id, conductor, { headers });
  }

  deleteConductor(id: number) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.delete(this.endpointsConductor + '/' + id, { headers });
  }

  /**
 * ------------------------------------------------------------------------------------------
 * FUNCIONES PARA TIPOS DE VEHICULOS |GET , POST , PUT , DELETE |
 * ---------------------------------------------------------------------------------------------
 * */
  getTipoVehiculo() {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.get(this.endpointsTipoVehiculo, { headers });
  }

  postTipoVehiculo(tipoVehiculo: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.post(this.endpointsTipoVehiculo, tipoVehiculo, { headers });
  }

  putTipoVehiculo(id: number, tipoVehiculo: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.put(this.endpointsTipoVehiculo + '/' + id, tipoVehiculo, { headers });
  }

  deleteTipoVehiculo(id: number) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.delete(this.endpointsTipoVehiculo + '/' + id, { headers });
  }

  /**
 * ------------------------------------------------------------------------------------------
 * FUNCIONES PARA VEHICULOS |GET , POST , PUT , DELETE |
 * --------------------------------------------------------------------------------------------
 * */
  getVehiculos() {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.get(this.endpointsVehiculos, { headers });
  }

  postVehiculos(vehiculo: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.post(this.endpointsVehiculos, vehiculo, { headers });
  }

  putVehiculos(id: string, vehiculo: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.put(this.endpointsVehiculos + '/' + id, vehiculo, { headers });
  }

  deleteVehiculos(id: string) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.delete(this.endpointsVehiculos + '/' + id, { headers });
  }

  /**
 * ------------------------------------------------------------------------------------------
 * FUNCIONES PARA VEHICULOS CONDUCTORES |GET , POST , PUT , DELETE |
 * --------------------------------------------------------------------------------------------
 * */
  getVehiculoConductor() {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.get(this.endpointsVehiculoConductor, { headers });
  }

  postVehiculoConductor(vehiculoConductor: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.post(this.endpointsVehiculoConductor, vehiculoConductor, { headers });
  }

  putVehiculoConductor(id: number, vehiculoConductor: any) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.put(this.endpointsVehiculoConductor + '/' + id, vehiculoConductor, { headers });
  }

  deleteVehiculoConductor(id: number) {
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    return this.http.delete(this.endpointsVehiculoConductor + '/' + id, { headers });
  }

}




