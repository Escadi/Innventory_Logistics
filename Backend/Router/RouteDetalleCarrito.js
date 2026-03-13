module.exports = (app) => {
    const controllerDetalleCarrito = require("../Controllers/ControllerDetallesCarrito");
    const router = require("express").Router();



    router.get("/", controllerDetalleCarrito.findAll);
    router.post("/", controllerDetalleCarrito.create);
    router.put("/:id", controllerDetalleCarrito.update);
    router.delete("/:id", controllerDetalleCarrito.delete);

    app.use("/api/detalleCarrito", router);
}