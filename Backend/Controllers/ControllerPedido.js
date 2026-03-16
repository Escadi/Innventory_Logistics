const db = require('../Models');
const { v4: uuidv4 } = require('uuid');
const Pedido = db.pedido;

exports.findAll = (req, res) => {
    Pedido.findAll({
        include: [
            { model: db.clientes, as: 'cliente' },
            {
                model: db.empleado, as: 'empleado',
                include: [{ model: db.centroTrabajo, as: 'centroTrabajo' }]
            },
            { model: db.centroTrabajo, as: 'centroTrabajo' }
        ]
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving pedidos."
            });
        });
}

exports.create = async (req, res) => {
    const trackingNumber = 'TRK-' + uuidv4().split('-')[0].toUpperCase();
    const pedido = {
        idPedido: trackingNumber,
        fechaPedido: req.body.fechaPedido,
        estado: req.body.estado,
        idCentro: req.body.idCentro,
        idEmpleado: req.body.idEmpleado,
        cifCliente: req.body.cifCliente
    };

    Pedido.create(pedido)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the pedido."
            });
        });
}

exports.update = (req, res) => {
    Pedido.update(req.body, { where: { idPedido: req.params.id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pedido was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Pedido with idPedido=${req.params.id}. Maybe Pedido was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the pedido."
            });
        });
}

exports.delete = (req, res) => {
    Pedido.destroy({ where: { idPedido: req.params.id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pedido was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete Pedido with idPedido=${req.params.id}. Maybe Pedido was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the pedido."
            });
        });
}