const db = require('../Models');
const DetallesPedido = db.detallePedido;

exports.findAll = (req, res) => {
    DetallesPedido.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving detallesPedido."
            });
        });
};

exports.create = (req, res) => {
    const detallesPedido = {
        idDetalleProducto: req.body.idDetalleProducto,
        idPedido: req.body.idPedido,
        cantidad: req.body.cantidad
    };

    DetallesPedido.create(detallesPedido)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating detallesPedido."
            });
        });
};

exports.update = (req, res) => {
    DetallesPedido.update(req.body, {
        where: { idDetallePedido: req.params.id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "detallesPedido was updated successfully."
                });
            } else {
                res.send({
                    message: "detallesPedido was not found."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating detallesPedido."
            });
        });
};

exports.delete = (req, res) => {
    DetallesPedido.destroy({
        where: { idDetallePedido: req.params.id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "detallesPedido was deleted successfully."
                });
            } else {
                res.send({
                    message: "detallesPedido was not found."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting detallesPedido."
            });
        });
};