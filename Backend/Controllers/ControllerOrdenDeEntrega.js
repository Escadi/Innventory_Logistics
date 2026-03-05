const db = require('../Models');
const OrdenDeEntrega = db.ordenDeEntrega;

exports.findAll = (req, res) => {
    OrdenDeEntrega.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving ordenDeEntrega."
            });
        });
};

exports.create = (req, res) => {
    const ordenDeEntrega = {
        idPedido: req.body.idPedido,
        idConductor: req.body.idConductor,
        fechaSalida: req.body.fechaSalida,
        fechaEntrega: req.body.fechaEntrega,
        estado: req.body.estado
    };

    OrdenDeEntrega.create(ordenDeEntrega)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating ordenDeEntrega."
            });
        });
};

exports.update = (req, res) => {
    OrdenDeEntrega.update(req.body, {
        where: { idOrdenDeEntrega: req.params.id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "ordenDeEntrega was updated successfully."
                });
            } else {
                res.send({
                    message: "ordenDeEntrega was not found."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating ordenDeEntrega."
            });
        });
};

exports.delete = (req, res) => {
    OrdenDeEntrega.destroy({
        where: { idOrdenDeEntrega: req.params.id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "ordenDeEntrega was deleted successfully."
                });
            } else {
                res.send({
                    message: "ordenDeEntrega was not found."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting ordenDeEntrega."
            });
        });
};