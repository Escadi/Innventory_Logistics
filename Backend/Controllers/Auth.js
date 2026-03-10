const db = require("../Models");
const Login = db.login;
const Worker = db.empleado;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

/**
 * Inicia sesión de usuario.
 * Verifica credenciales, recupera el rol y genera un token JWT.
 */
exports.login = async (req, res) => {
    const idEmpleado = req.body.idEmpleado;
    const contrasena = req.body.contrasena;

    try {
        const user = await Login.findOne({
            where: { idEmpleado: idEmpleado },
            include: [{ model: Worker, as: 'empleado' }]
        });

        if (!user) {
            return res.status(404).send({ message: "Usuario no encontrado." });
        }

        const passwordIsValid = await bcrypt.compare(contrasena, user.contrasena);

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Contraseña incorrecta."
            });
        }

        let realRole = user.role || 'Empleado';

        const token = jwt.sign({ id: user.idEmpleado, role: realRole }, process.env.JWT_SECRET || "secret-key", {
            expiresIn: 86400 // 24 horas
        });

        res.status(200).send({
            idEmpleado: user.idEmpleado,
            role: realRole,
            nombre: user.empleado ? user.empleado.nombre : 'Usuario',
            apellido: user.empleado ? user.empleado.apellido : '',
            accessToken: token
        });

    } catch (err) {
        console.error("Login Critical Error:", err);
        res.status(500).send({ message: err.message });
    }
};