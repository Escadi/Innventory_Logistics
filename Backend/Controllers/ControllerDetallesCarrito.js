const db = require('../Models');
const DetallesCarrito = db.detalleCarrito;


exports.findAll = (req, res) => {
    DetallesCarrito.findAll({
        include: [
            {
                model: db.detalleProducto,
                as: 'detallesProducto',
                include: [
                    {
                        model: db.producto,
                        as: 'producto'
                    }
                ]
            }
        ]
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving detallesCarrito."
            });
        });
}
exports.create = (req, res) => {
    const detallesCarrito = {
        idDetalleProducto: req.body.idDetalleProducto,
        idPedido: req.body.idPedido,
        cantidad: req.body.cantidad
    };
    DetallesCarrito.create(detallesCarrito)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating detallesCarrito."
            });
        });
}
exports.update = (req, res) => {
    DetallesCarrito.update(req.body, {
        where: { idDetalleCarrito: req.params.id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "detallesCarrito was updated successfully."
                });
            } else {
                res.send({
                    message: "detallesCarrito was not found."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating detallesCarrito."
            });
        });
}
exports.delete = (req, res) => {
    DetallesCarrito.destroy({
        where: { idDetalleCarrito: req.params.id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "detallesCarrito was deleted successfully."
                });
            } else {
                res.send({
                    message: "detallesCarrito was not found."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting detallesCarrito."
            });
        });
}


