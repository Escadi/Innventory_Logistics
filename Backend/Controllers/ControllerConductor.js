const db = require('../Models');
const Conductor = db.conductor;


exports.findAll = (req, res) => {
    Conductor.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving conductores."
            });
        });
}

exports.create = (req, res) => {
    const conductor = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        email: req.body.email,
        idVehiculo: req.body.idVehiculo,
    };

    Conductor.create(conductor)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the conductor."
            });
        });
}

exports.update = (req, res) => {
    const conductor = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        email: req.body.email,
        idVehiculo: req.body.idVehiculo
    };

    Conductor.update(conductor, { where: { idConductor: req.params.id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Customer with idConductor=${req.params.id}. Maybe Customer was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the conductor."
            });
        });
}

exports.delete = (req, res) => {
    Conductor.destroy({ where: { idConductor: req.params.id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete Customer with idConductor=${req.params.id}. Maybe Customer was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the conductor."
            });
        });
}

