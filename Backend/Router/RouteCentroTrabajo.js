module.exports = (app) => {

    const centroTrabajo = require('../Controllers/ControllerCentroTrabajo');
    const route = require('express').Router();

    /**------------------------------------------------------------------------------
   * RUTAS DE LOS CENTROS DE TRABAJO
   * ------------------------------------------------------------------------------
   */
    route.get('/', centroTrabajo.findAll);
    route.post('/', centroTrabajo.create);
    route.put('/:id', centroTrabajo.update);
    route.delete('/:id', centroTrabajo.delete);

    /**------------------------------------------------------------------------------
     * API DE LOS CENTROS DE TRABAJO
     * ------------------------------------------------------------------------------
     */

    app.use('/api/centroTrabajo', route);
}