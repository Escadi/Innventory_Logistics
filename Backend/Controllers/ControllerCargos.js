const db = require('../Models');
const Cargo = db.cargo;

exports.findAll = (req, res) => {
    Cargo.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving cargos."
            });
        });
};

exports.create = (req, res) => {
    const cargo = {
        nombreCargo: req.body.nombreCargo
    };

    Cargo.create(cargo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the cargo."
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    const cargo = {
        nombreCargo: req.body.nombreCargo
    };

    Cargo.update(cargo, { where: { idCargo: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Cargo was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Cargo with id=${id}. Maybe Cargo was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating Cargo with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Cargo.destroy({ where: { idCargo: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Cargo was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Cargo with id=${id}. Maybe Cargo was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Could not delete Cargo with id=" + id
            });
        });
};