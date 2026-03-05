const db = require('../Models');
const TipoVehiculo = db.tipoVehiculo;

exports.findAll = (req, res) => {
    TipoVehiculo.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving tipoVehiculos."
            });
        });
}

exports.create = (req, res) => {
    const tipoVehiculo = {
        tipoVehiculo: req.body.tipoVehiculo
    };

    TipoVehiculo.create(tipoVehiculo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the tipoVehiculo."
            });
        });
}

exports.update = (req, res) => {
    const tipoVehiculo = {
        tipoVehiculo: req.body.tipoVehiculo
    };

    TipoVehiculo.update(tipoVehiculo, { where: { idTipo: req.params.id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Customer with idTipo=${req.params.id}. Maybe Customer was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the tipoVehiculo."
            });
        });
}

exports.delete = (req, res) => {
    TipoVehiculo.destroy({ where: { idTipo: req.params.id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete Customer with idTipo=${req.params.id}. Maybe Customer was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the tipoVehiculo."
            });
        });
}