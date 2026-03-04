module.exports = (sequelize, Sequelize) => {
    const Conductor = sequelize.define("conductor", {
        idConductor: {
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
        telefono: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,

        },
        idVehiculo: {
            type: Sequelize.STRING,

        }
    });

    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */
    // QUE TABLAS RELACIONA CON ESTA TABLA DE DONDE VIENE CADA UNA


    Conductor.associate = (models) => {
        // FK DE LAS OTRAS TABLAS QUE SE RELACIONAN CON ESTA TABLA
        Conductor.hasMany(models.ordenDeEntrega, {
            foreignKey: "idConductor",
            as: "ordenDeEntrega",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Conductor.belongsTo(models.vehiculo, {
            foreignKey: "idVehiculo",
            targetKey: "matricula",
            as: "vehiculo",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return Conductor;
};