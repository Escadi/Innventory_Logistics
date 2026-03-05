module.exports = app => {
    const departamentos = require('../Controllers/ControllerDepartamentos');
    const router = require('express').Router();

    /**------------------------------------------------------------------------------
     * RUTAS DE DEPARTAMENTOS
     * ------------------------------------------------------------------------------
     */

    router.get('/', departamentos.findAll);
    router.post('/', departamentos.create);
    router.put('/:id', departamentos.update);
    router.delete('/:id', departamentos.delete);

    /**------------------------------------------------------------------------------
     * FIN DE RUTAS DE DEPARTAMENTOS
     * ------------------------------------------------------------------------------
     */

    app.use('/api/departamento', router);
}