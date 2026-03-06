module.exports = (app) => {
    const router = require('express').Router();
    const uploadMulter = require('../Multer/Upload.js');
    const controller = require('../Controllers/ControllerProductos');

    router.get('/', controller.findAll);
    router.post('/', uploadMulter.single('file'), controller.create);
    router.put('/:id', uploadMulter.single('file'), controller.update);
    router.delete('/:id', controller.delete);

    app.use('/api/producto', router);
}