module.exports = (app) => {
    const router = require("express").Router();
    const vehiculoConductor = require("../Controllers/ControllerVehiculoConductor");


    router.get("/", vehiculoConductor.findAll);
    router.post("/", vehiculoConductor.create);
    router.put("/:id", vehiculoConductor.update);
    router.delete("/:id", vehiculoConductor.delete);



    app.use("/api/vehiculoConductor", router);
}