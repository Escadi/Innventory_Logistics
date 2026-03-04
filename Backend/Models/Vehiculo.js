module.exports = (sequelize, Sequelize) => {
    const Vehiculo = sequelize.define("vehiculo", {
        matricula: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        placa: {
            type: Sequelize.STRING,

        },
        marca: {
            type: Sequelize.STRING,

        },
        modelo: {
            type: Sequelize.STRING,

        },
        idTipoVehiculo: {
            type: Sequelize.INTEGER,

        }

    });

    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */
    // QUE TABLAS RELACIONA CON ESTA TABLA DE DONDE VIENE CADA UNA


    Vehiculo.associate = function (models) {
        // FK DE LAS OTRAS TABLAS QUE SE RELACIONAN CON ESTA TABLA
        Vehiculo.belongsTo(models.Conductor, {
            foreignKey: "IdVehiculo",
            targetKey: "IdVehiculo",
            as: "Conductor",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return Vehiculo;
};