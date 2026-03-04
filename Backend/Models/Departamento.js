module.exports = (sequelize, Sequelize) => {
    const Departamento = sequelize.define("Departamento", {
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

    Departamento.associate = function (models) {
        // CON QUE TABLAS SE RELACIONA ESTA TABLA
        Departamento.hasMany(models.Empleado, {
            foreignKey: "idDepartamento",
            as: "Empleado",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return Departamento;
};