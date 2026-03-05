const db = require('../Models');
const CentroTrabajo = db.centroTrabajo;

exports.findAll = (req, res) => {
    CentroTrabajo.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving centros de trabajo."
            });
        });
};

exports.create = (req, res) => {
    const centroTrabajo = {
        nombreCentro: req.body.nombreCentro
    };

    CentroTrabajo.create(centroTrabajo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the centro de trabajo."
            });
        });
};

exports.update = (req, res) => {
    const idCentro = req.params.id;
    CentroTrabajo.update(req.body, { where: { idCentro: idCentro } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Centro de trabajo was updated successfully!"
                });
            } else {
                res.send({
                    message: `Cannot update Centro de trabajo with id=${idCentro}. Maybe Centro de trabajo was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the centro de trabajo."
            });
        });
};

exports.delete = (req, res) => {
    const idCentro = req.params.id;

    CentroTrabajo.destroy({ where: { idCentro: idCentro } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Centro de trabajo was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Centro de trabajo with id=${idCentro}. Maybe Centro de trabajo was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the centro de trabajo."
            });
        });
};
