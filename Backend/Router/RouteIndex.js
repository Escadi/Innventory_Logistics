module.exports = app => {

    require('./RouteCliente')(app);
    require('./RouteCargo')(app);
    require('./RouteDepartamento')(app);
    require('./RouteEmpleados')(app);
    require('./RouteCategoria')(app);
    require('./RouteCentroTrabajo')(app);

}