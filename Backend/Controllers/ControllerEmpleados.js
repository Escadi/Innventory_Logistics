const bcrypt = require('bcrypt');
const db = require('../Models');
const Empleado = db.empleado;
const Login = db.login;


exports.findAll = (req, res) => {
    Empleado.findAll({
        include: [
            { model: db.cargo, as: 'cargo' },
            { model: db.centroTrabajo, as: 'centroTrabajo' },
            { model: db.departamento, as: 'departamento' },
        ]
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving empleados."
            });
        });
};

exports.create = async (req, res) => {
    const empleado = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        email: req.body.email,
        idCargo: req.body.idCargo,
        idCentro: req.body.idCentro,
        idDepartamento: req.body.idDepartamento
    };

    try {
        const data = await Empleado.create(empleado);

        const passwordToHash = req.body.temporalPassword;
        const role = req.body.rol;
        const saltRounds = 10;

        const hashedPassword = await bcrypt.hash(passwordToHash, saltRounds);

        const login = {
            idEmpleado: data.idEmpleado,
            contrasena: hashedPassword,
            rol: role
        };

        console.log(login)
        await Login.create(login);


        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the empleado."
        });
    }
};

exports.update = (req, res) => {
    const id = req.params.id;
    const empleado = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        email: req.body.email,
        idCargo: req.body.idCargo,
        idCentro: req.body.idCentro,
        idDepartamento: req.body.idDepartamento
    };

    Empleado.update(empleado, { where: { idEmpleado: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Empleado was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Empleado with id=${id}. Maybe Empleado was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error updating Empleado with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Empleado.destroy({ where: { idEmpleado: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Empleado was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Empleado with id=${id}. Maybe Empleado was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Could not delete Empleado with id=" + id
            });
        });
};