module.exports = app => {
    const conductor = require("../Controllers/ControllerConductor");
    const router = require("express").Router();

    router.get("/", conductor.findAll);
    router.post("/", conductor.create);
    router.put("/:id", conductor.update);
    router.delete("/:id", conductor.delete);

    app.use("/api/conductor", router);
}