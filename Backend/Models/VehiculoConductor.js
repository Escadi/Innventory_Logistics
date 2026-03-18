module.exports = (sequelize, Sequelize) => {
    const VehiculoConductor = sequelize.define('vehiculoConductor', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        matricula: {
            type: Sequelize.STRING,

        },
        idConductor: {
            type: Sequelize.INTEGER,

        },
        fechaRecogidaVehiculo: {
            type: Sequelize.DATE,

        },
        fechaDevolucionVehiculo: {
            type: Sequelize.DATE,

        }
    });
    // Relaciones
    VehiculoConductor.associate = (models) => {
        VehiculoConductor.belongsTo(models.vehiculo, {
            foreignKey: 'matricula',
            targetKey: 'matricula',
            as: 'vehiculo',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });
        VehiculoConductor.belongsTo(models.conductor, {
            foreignKey: 'idConductor',
            targetKey: 'idConductor',
            as: 'conductor',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });
    };
    return VehiculoConductor;
};