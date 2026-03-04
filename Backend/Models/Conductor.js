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
            type: Sequelize.INTEGER,

        }
    });

    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */
    // QUE TABLAS RELACIONA CON ESTA TABLA DE DONDE VIENE CADA UNA


    Conductor.associate = function (models) {
        // FK DE LAS OTRAS TABLAS QUE SE RELACIONAN CON ESTA TABLA
        Conductor.belongsTo(models.OrdenDeEntrega, {
            foreignKey: "IdConductor",
            targetKey: "IdConductor",
            as: "OrdenDeEntrega",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return Conductor;
};