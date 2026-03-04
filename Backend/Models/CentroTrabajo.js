module.exports = (sequelize, Sequelize) => {
    const CentroTrabajo = sequelize.define("CentroTrabajo", {
        IdCentro: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        NombreCentro: {
            type: Sequelize.STRING,
        }
    });
    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */

    CentroTrabajo.associate = function (models) {
        CentroTrabajo.hasMany(models.Empleado, {
            foreignKey: "idCentro",
            as: "Empleado",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        CentroTrabajo.hasMany(models.Pedido, {
            foreignKey: "idCentro",
            as: "Pedido",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };
    return CentroTrabajo;
};