module.exports = app => {
    const detallesPedido = require("../Controllers/ControllerDetallesPedido.js");
    const router = require("express").Router();

    router.get("/", detallesPedido.findAll);
    router.post("/", detallesPedido.create);
    router.put("/:id", detallesPedido.update);
    router.delete("/:id", detallesPedido.delete);

    app.use('/api/detallePedido', router);
};