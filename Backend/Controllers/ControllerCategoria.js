const db = require('../Models');
const Categoria = db.categoria;

exports.findAll = (req, res) => {
    Categoria.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categorias."
            });
        });
};
exports.create = (req, res) => {
    const categoria = {
        nombreCategoria: req.body.nombreCategoria
    };

    Categoria.create(categoria)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the categoria."
            });
        });
};
exports.update = (req, res) => {
    const id = req.params.id;
    const categoria = {
        nombreCategoria: req.body.nombreCategoria
    };

    Categoria.update(categoria, { where: { idCategoria: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Categoria was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Categoria with id=${id}. Maybe Categoria was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating Categoria with id=" + id
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Categoria.destroy({ where: { idCategoria: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Categoria was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Categoria with id=${id}. Maybe Categoria was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Could not delete Categoria with id=" + id
            });
        });
};