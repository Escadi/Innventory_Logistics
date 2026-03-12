module.exports = app => {
    const ordenDeEntrega = require("../Controllers/ControllerOrdenDeEntrega.js");
    const router = require("express").Router();

    router.get("/", ordenDeEntrega.findAll);
    router.post("/", ordenDeEntrega.create);
    router.put("/:id", ordenDeEntrega.update);
    router.delete("/:id", ordenDeEntrega.delete);

    app.use('/api/ordenesEntrega', router);
};