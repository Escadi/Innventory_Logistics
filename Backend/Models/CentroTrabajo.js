module.exports = (sequelize, Sequelize) => {
    const CentroTrabajo = sequelize.define("centroTrabajo", {
        idCentro: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreCentro: {
            type: Sequelize.STRING,
        }
    });
    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */

    CentroTrabajo.associate = function (models) {
        // CON QUE TABLAS SE RELACIONA ESTA TABLA
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