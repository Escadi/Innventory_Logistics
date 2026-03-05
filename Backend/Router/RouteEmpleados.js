module.exports = app => {
    const empleados = require('../Controllers/ControllerEmpleados');
    const router = require('express').Router();

    /**------------------------------------------------------------------------------
     * RUTAS DE EMPLEADOS
     * ------------------------------------------------------------------------------
     */


    router.get('/', empleados.findAll);
    router.post('/', empleados.create);
    router.put('/:id', empleados.update);
    router.delete('/:id', empleados.delete);

    /**------------------------------------------------------------------------------
     * FIN DE RUTAS DE EMPLEADOS
     * ------------------------------------------------------------------------------
     */

    app.use('/api/empleados', router);
}