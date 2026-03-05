module.exports = app => {
    const controller = require("../Controllers/ControllerProveedores");
    const router = require("express").Router();

    router.get("/", controller.findAll);
    router.post("/", controller.create);
    router.put("/:id", controller.update);
    router.delete("/:id", controller.delete);

    app.use("/api/proveedor", router);
}