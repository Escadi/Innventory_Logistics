module.exports = app => {
    const detallesProducto = require('../Controllers/ControllerDetallesProducto.js');
    const router = require('express').Router();

    router.get('/', detallesProducto.findAll);
    router.post('/', detallesProducto.create);
    router.put('/:id', detallesProducto.update);
    router.delete('/:id', detallesProducto.delete);

    app.use('/api/detalleProducto', router);
};