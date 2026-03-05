module.exports = app => {
    const cargos = require('../Controllers/ControllerCargos');
    const router = require('express').Router();

    /**------------------------------------------------------------------------------
     * RUTAS DE CARGOS
     * ------------------------------------------------------------------------------
     */


    router.get('/', cargos.findAll);
    router.post('/', cargos.create);
    router.put('/:id', cargos.update);
    router.delete('/:id', cargos.delete);

    /**------------------------------------------------------------------------------
     * FIN DE RUTAS DE CARGOS
     * ------------------------------------------------------------------------------
     */

    app.use('/api/cargos', router);
}