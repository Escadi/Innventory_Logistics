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
            defaultValue: 'inactivo'
        }
    });

    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */



    Vehiculo.associate = (models) => {
        // RELACIÓN CON LA TABLA DE VEHICULOCONDUCTOR LE DA LA PRIMARY KEY DE ESTA TABLA
        Vehiculo.hasMany(models.vehiculoConductor, {
            foreignKey: "matricula",
            targetKey: "matricula",
            as: "vehiculoConductor",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        // FOREIGN KEY DE LA TABLA DE TIPOVEHICULO
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