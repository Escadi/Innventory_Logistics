const db = require('../Models');
const DetallesProducto = db.detalleProducto;

exports.findAll = (req, res) => {
    DetallesProducto.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving detallesProducto."
            });
        });
};

exports.create = (req, res) => {
    const detallesProducto = {
        idProducto: req.body.idProducto,
        idDepartamento: req.body.idDepartamento,
        cantidad: req.body.cantidad
    };

    DetallesProducto.create(detallesProducto)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating detallesProducto."
            });
        });
};

exports.update = (req, res) => {
    DetallesProducto.update(req.body, {
        where: { idDetalle: req.params.id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "detallesProducto was updated successfully."
                });
            } else {
                res.send({
                    message: "detallesProducto was not found."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating detallesProducto."
            });
        });
};

exports.delete = (req, res) => {
    DetallesProducto.destroy({
        where: { idDetalle: req.params.id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "detallesProducto was deleted successfully."
                });
            } else {
                res.send({
                    message: "detallesProducto was not found."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting detallesProducto."
            });
        });
};