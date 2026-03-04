module.exports = (sequelize, Sequelize) => {
    const TipoVehiculo = sequelize.define("tipoVehiculo", {
        idTipo: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipoVehiculo: {
            type: Sequelize.STRING,

        }

    });

    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */
    // QUE TABLAS RELACIONA CON ESTA TABLA DE DONDE VIENE CADA UNA


    TipoVehiculo.associate = (models) => {
        // FK DE LAS OTRAS TABLAS QUE SE RELACIONAN CON ESTA TABLA
        TipoVehiculo.hasMany(models.vehiculo, {
            foreignKey: "idTipo",
            as: "vehiculo",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return TipoVehiculo;
};