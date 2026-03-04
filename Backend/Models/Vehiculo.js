module.exports = (sequelize, Sequelize) => {
    const Vehiculo = sequelize.define("Vehiculo", {
        Matricula: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        Placa: {
            type: Sequelize.STRING,

        },
        Marca: {
            type: Sequelize.STRING,

        },
        Modelo: {
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