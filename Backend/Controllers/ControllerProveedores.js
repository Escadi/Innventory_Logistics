const db = require('../Models')
const Proveedor = db.proveedor;

exports.findAll = (req, res) => {

    Proveedor.findAll({
        include: [{ model: db.categoria, as: "categoria" }]
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving proveedores."
            });
        });
}

exports.create = (req, res) => {
    const proveedor = {
        CifProveedor: req.body.CifProveedor,
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        email: req.body.email,
        idCategoria: req.body.idCategoria
    };

    Proveedor.create(proveedor)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the proveedor."
            });
        });
}

exports.update = (req, res) => {
    Proveedor.update(req.body, { where: { CifProveedor: req.params.id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Customer with CifProveedor=${req.params.id}. Maybe Customer was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the proveedor."
            });
        });
}

exports.delete = (req, res) => {
    Proveedor.destroy({ where: { CifProveedor: req.params.id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete Customer with CifProveedor=${req.params.id}. Maybe Customer was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the proveedor."
            });
        });
}