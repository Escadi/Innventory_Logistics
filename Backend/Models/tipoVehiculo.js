module.exports = (sequelize, Sequelize) => {
    const TipoVehiculo = sequelize.define("TipoVehiculo", {
        IdTipo: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        TipoVehiculo: {
            type: Sequelize.STRING,

        }

    });

    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */
    // QUE TABLAS RELACIONA CON ESTA TABLA DE DONDE VIENE CADA UNA


    TipoVehiculo.associate = function (models) {
        // FK DE LAS OTRAS TABLAS QUE SE RELACIONAN CON ESTA TABLA
        TipoVehiculo.belongsTo(models.Vehiculo, {
            foreignKey: "IdTipoVehiculo",
            targetKey: "IdTipoVehiculo",
            as: "Vehiculo",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return TipoVehiculo;
};