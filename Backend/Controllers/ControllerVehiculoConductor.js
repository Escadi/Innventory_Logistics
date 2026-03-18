const db = require('../Models');
const vehiculoConductor = db.vehiculoConductor;

exports.findAll = (req, res) => {
    vehiculoConductor.findAll(
        {
            include: [
                { model: db.vehiculo, as: 'vehiculo' },
                { model: db.conductor, as: 'conductor' }
            ]
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving vehiculoConductor."
            });
        });
}
exports.create = (req, res) => {
    const vehiculoConductor = {
        matricula: req.body.matricula,
        idConductor: req.body.idConductor,
        fechaRecogidaVehiculo: req.body.fechaRecogidaVehiculo,
        fechaDevolucionVehiculo: req.body.fechaDevolucionVehiculo
    };
    vehiculoConductor.create(vehiculoConductor)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the vehiculoConductor."
            });
        });
}
exports.update = (req, res) => {
    const updateVehiculoConductor = {
        fechaRecogidaVehiculo: req.body.fechaRecogidaVehiculo,
        fechaDevolucionVehiculo: req.body.fechaDevolucionVehiculo
    };
    vehiculoConductor.update(updateVehiculoConductor, { where: { id: req.params.id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "VehiculoConductor was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update VehiculoConductor with idVehiculoConductor=${req.params.id}. Maybe VehiculoConductor was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the vehiculoConductor."
            });
        });
}
exports.delete = (req, res) => {
    vehiculoConductor.destroy({ where: { id: req.params.id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "VehiculoConductor was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete VehiculoConductor with idVehiculoConductor=${req.params.id}. Maybe VehiculoConductor was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the vehiculoConductor."
            });
        });
}
