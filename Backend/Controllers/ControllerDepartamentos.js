const db = require('../Models');
const Departamento = db.departamento;

exports.findAll = (req, res) => {
    Departamento.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving departamentos."
            });
        });
};

exports.create = (req, res) => {
    const departamento = {
        nombreDepartamento: req.body.nombreDepartamento
    };

    Departamento.create(departamento)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the departamento."
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    const departamento = {
        nombreDepartamento: req.body.nombreDepartamento
    };

    Departamento.update(departamento, { where: { idDepartamento: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Departamento was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Departamento with id=${id}. Maybe Departamento was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating Departamento with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Departamento.destroy({ where: { idDepartamento: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Departamento was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Departamento with id=${id}. Maybe Departamento was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Could not delete Departamento with id=" + id
            });
        });
};
