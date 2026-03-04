module.exports = (sequelize, Sequelize) => {
    const Departamento = sequelize.define("departamento", {
        idDepartamento: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreDepartamento: {
            type: Sequelize.STRING,
        }
    });
    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */

    Departamento.associate = (models) => {
        // CON QUE TABLAS SE RELACIONA ESTA TABLA
        Departamento.hasMany(models.empleado, {
            foreignKey: "idDepartamento",
            as: "empleado",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Departamento.hasMany(models.detalleProducto, {
            foreignKey: "idDepartamento",
            as: "detallesProducto",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Departamento.hasMany(models.centroTrabajo, {
            foreignKey: "idDepartamento",
            as: "centroTrabajo",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return Departamento;
};