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

    CentroTrabajo.associate = (models) => {
        // CON QUE TABLAS SE RELACIONA ESTA TABLA
        CentroTrabajo.hasMany(models.empleado, {
            foreignKey: "idCentro",
            as: "empleado",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        CentroTrabajo.hasMany(models.pedido, {
            foreignKey: "idCentro",
            as: "pedido",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        CentroTrabajo.hasMany(models.detalleProducto, {
            foreignKey: "idCentro",
            as: "detallesProducto",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        })
    };
    return CentroTrabajo;
};