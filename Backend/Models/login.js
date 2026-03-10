module.exports = (sequelize, Sequelize) => {
    const Login = sequelize.define("login", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idEmpleado: {
            type: Sequelize.INTEGER,
        },
        contrasena: {
            type: Sequelize.STRING,
        },
        role: {
            type: Sequelize.STRING,
        }
    });
    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */
    // DE QUE TABLA VIENE LA RELACION
    Login.associate = models => {
        Login.belongsTo(models.empleado,
            {
                foreignKey: 'idEmpleado',
                targetKey: 'idEmpleado',
                as: 'empleado',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            });
    };
    return Login;
};
