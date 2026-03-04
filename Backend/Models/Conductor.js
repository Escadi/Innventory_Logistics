module.exports = (sequelize, Sequelize) => {
    const Conductor = sequelize.define("Conductor", {
        IdConductor: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nombre: {
            type: Sequelize.STRING,

        },
        Apellido: {
            type: Sequelize.STRING,

        },
        Telefono: {
            type: Sequelize.STRING,
        },
        Email: {
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