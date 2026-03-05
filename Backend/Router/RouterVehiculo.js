module.exports = (app) => {
    const router = require('express').Router();
    const controller = require('../Controllers/ControllerVehiculo');

    router.get('/', controller.findAll);
    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);

    app.use('/api/vehiculo', router);
}