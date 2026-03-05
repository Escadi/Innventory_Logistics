const db = require('../Models');
const Clientes = db.clientes;


exports.findAll = (req, res) => {
    Clientes.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        });
}

exports.create = (req, res) => {
    const cliente = {
        cifCliente: req.body.cifCliente,
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        correo: req.body.correo,
        codigoPostal: req.body.codigoPostal,
        ciudad: req.body.ciudad,
        pais: req.body.pais,
    };
    Clientes.create(cliente)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the customer."
            });
        });
}

exports.update = (req, res) => {
    const cifCliente = req.params.id;
    Clientes.update(req.body, { where: { cifCliente: cifCliente } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Customer with cifCliente=${cifCliente}. Maybe Customer was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Customer with cifCliente=" + cifCliente
            });
        });
}

exports.delete = (req, res) => {
    const cifCliente = req.params.id;
    Clientes.destroy({ where: { cifCliente: cifCliente } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Customer with cifCliente=${cifCliente}. Maybe Customer was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Customer with cifCliente=" + cifCliente
            });
        });
}