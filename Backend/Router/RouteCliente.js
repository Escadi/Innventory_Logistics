module.exports = app => {
    const clientes = require('../Controllers/ControllerClientes');
    const router = require('express').Router();

    /**------------------------------------------------------------------------------
     * RUTAS DE CLIENTES
     * ------------------------------------------------------------------------------
     */
    router.get('/', clientes.findAll);
    router.post('/', clientes.create);
    router.put('/:id', clientes.update);
    router.delete('/:id', clientes.delete);

    /**------------------------------------------------------------------------------
     * FIN DE RUTAS DE CLIENTES
     * ------------------------------------------------------------------------------
     */

    app.use('/api/clientes', router);
}