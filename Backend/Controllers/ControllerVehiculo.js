const db = require('../Models');
const Vehiculo = db.vehiculo;

exports.findAll = (req, res) => {
    Vehiculo.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving vehiculos."
            });
        });
}

exports.create = (req, res) => {
    const vehiculo = {
        matricula: req.body.matricula,
        marca: req.body.marca,
        modelo: req.body.modelo,
        color: req.body.color,
        idTipo: req.body.idTipo
    };

    Vehiculo.create(vehiculo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the vehiculo."
            });
        });
}

exports.update = (req, res) => {
    Vehiculo.update(req.body, { where: { matricula: req.params.id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Customer with matricula=${req.params.id}. Maybe Customer was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the vehiculo."
            });
        });
}

exports.delete = (req, res) => {
    Vehiculo.destroy({ where: { matricula: req.params.id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete Customer with matricula=${req.params.id}. Maybe Customer was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the vehiculo."
            });
        });
}