module.exports = app => {

    require('./RouteCliente')(app);
    require('./RouteCargo')(app);
    require('./RouteDepartamento')(app);
    require('./RouteEmpleados')(app);
    require('./RouteCategoria')(app);
    require('./RouteCentroTrabajo')(app);
    require('./RouteConductor')(app);
    require('./RouterVehiculo')(app);
    require('./RouterTipoVehiculo')(app);
    require('./RouteProducto')(app);
    require('./RouterProveedor')(app);
    require('./RouterPedido')(app);
    require('./RouteDetallesProducto')(app);
    require('./RouteDetallePedido')(app);
    require('./RouteOrdenDeEntrega')(app);
    require('./AuthRoute')(app);
    require('./RouteDetalleCarrito')(app);
    require('./RouteVehiculoConductor')(app);

}