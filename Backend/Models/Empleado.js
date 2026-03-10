module.exports = (sequelize, Sequelize) => {
    const Empleado = sequelize.define("empleado", {
        idEmpleado: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING,

        },
        apellido: {
            type: Sequelize.STRING,

        },
        email: {
            type: Sequelize.STRING,

        },
        telefono: {
            type: Sequelize.STRING,

        },
        idCentro: {
            type: Sequelize.INTEGER,

        },
        idCargo: {
            type: Sequelize.INTEGER,

        },
        idDepartamento: {
            type: Sequelize.INTEGER,

        }

    });
    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */

    Empleado.associate = (models) => {
        // QUE TABLAS RELACIONA CON ESTA TABLA DE DONDE VIENE CADA UNA 
        Empleado.belongsTo(models.centroTrabajo, {
            foreignKey: "idCentro",
            targetKey: "idCentro",
            as: "centroTrabajo",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Empleado.belongsTo(models.cargo, {
            foreignKey: "idCargo",
            targetKey: "idCargo",
            as: "cargo",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Empleado.belongsTo(models.departamento, {
            foreignKey: "idDepartamento",
            targetKey: "idDepartamento",
            as: "departamento",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });

        // CON QUE TABLAS SE RELACIONA ESTA TABLA
        Empleado.hasMany(models.producto, {
            foreignKey: "idEmpleado",
            as: "productos",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Empleado.hasMany(models.pedido, {
            foreignKey: "idEmpleado",
            as: "pedido",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Empleado.hasOne(models.login, {
            foreignKey: "idEmpleado",
            as: "login",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return Empleado;
};