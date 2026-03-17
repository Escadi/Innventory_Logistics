module.exports = (sequelize, Sequelize) => {
    const Vehiculo = sequelize.define("vehiculo", {
        matricula: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        marca: {
            type: Sequelize.STRING,

        },
        modelo: {
            type: Sequelize.STRING,

        },
        color: {
            type: Sequelize.STRING,

        },
        idTipo: {
            type: Sequelize.INTEGER,

        },
        estado: {
            type: Sequelize.STRING,
            defaultValue: 'Activo'
        }
    });

    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */
    // QUE TABLAS RELACIONA CON ESTA TABLA DE DONDE VIENE CADA UNA


    Vehiculo.associate = (models) => {
        // FK DE LAS OTRAS TABLAS QUE SE RELACIONAN CON ESTA TABLA
        Vehiculo.belongsTo(models.tipoVehiculo, {
            foreignKey: "idTipo",
            targetKey: "idTipo",
            as: "tipoVehiculo",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return Vehiculo;
};