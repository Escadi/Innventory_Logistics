const db = require("../Models");
const login = db.login;

exports.getLogin = (req, res) => {
    login.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving login."
            });
        });
};


exports.create = (req, res) => {

    const login = {
        idEmpleado: req.body.idEmpleado,
        contrasena: req.body.contrasena,
        rol: req.body.rol || 'Empleado'
    };

    login.create(login)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating login."
            });
        });
};


exports.update = (req, res) => {
    login.update(req.body, {
        where: { id: req.params.id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "login was updated successfully."
                });
            } else {
                res.send({
                    message: "login was not found."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating login."
            });
        });
};
exports.delete = (req, res) => {
    login.destroy({
        where: { id: req.params.id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "login was deleted successfully."
                });
            } else {
                res.send({
                    message: "login was not found."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting login."
            });
        });
};