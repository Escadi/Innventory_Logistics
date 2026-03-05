module.exports = app => {
    const categorias = require('../Controllers/ControllerCategoria');
    const router = require('express').Router();

    /**------------------------------------------------------------------------------
     * RUTAS DE CATEGORIAS
     * ------------------------------------------------------------------------------
     */

    router.get('/', categorias.findAll);
    router.post('/', categorias.create);
    router.put('/:id', categorias.update);
    router.delete('/:id', categorias.delete);

    /**------------------------------------------------------------------------------
     * FIN DE RUTAS DE CATEGORIAS
     * ------------------------------------------------------------------------------
     */

    app.use('/api/categoria', router);
}