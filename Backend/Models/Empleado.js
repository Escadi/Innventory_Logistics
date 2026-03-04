module.exports = (sequelize, Sequelize) => {
    const Empleado = sequelize.define("Empleado", {
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


    // QUE TABLAS RELACIONA CON ESTA TABLA DE DONDE VIENE CADA UNA 
    Empleado.associate = function (models) {
        Empleado.belongsTo(models.CentroTrabajo, {
            foreignKey: "idCentro",
            targetKey: "idCentro",
            as: "CentroTrabajo",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Empleado.belongsTo(models.Cargo, {
            foreignKey: "idCargo",
            targetKey: "idCargo",
            as: "Cargo",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Empleado.belongsTo(models.Departamento, {
            foreignKey: "idDepartamento",
            targetKey: "idDepartamento",
            as: "Departamento",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    // RELACIONES A LAS QUE VA ESTA TABLA
    Empleado.hasMany(models.Producto, {
        foreignKey: "idEmpleado",
        as: "Productos",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    });

    return Empleado;
};