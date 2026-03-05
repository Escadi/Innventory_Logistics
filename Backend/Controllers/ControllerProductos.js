const db = require('../Models');
const Producto = db.producto;
const Categoria = db.categoria;

exports.findAll = (req, res) => {
    Producto.findAll({
        include: [{ model: Categoria, as: "categoria" }]
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving productos."
            });
        });
}

exports.create = (req, res) => {
    const producto = {
        nombreProducto: req.body.nombreProducto,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        idEmpleado: req.body.idEmpleado,
        idProveedor: req.body.idProveedor,
        idCategoria: req.body.idCategoria
    };

    Producto.create(producto)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the producto."
            });
        });
}

exports.update = (req, res) => {
    Producto.update(req.body, { where: { idProducto: req.params.id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Customer with idProducto=${req.params.id}. Maybe Customer was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the producto."
            });
        });
}

exports.delete = (req, res) => {
    Producto.destroy({ where: { idProducto: req.params.id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete Customer with idProducto=${req.params.id}. Maybe Customer was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the producto."
            });
        });
}