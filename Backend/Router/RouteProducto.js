module.exports = (app) => {
    const router = require('express').Router();
    const controller = require('../Controllers/ControllerProductos');

    router.get('/', controller.findAll);
    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);

    app.use('/api/producto', router);
}