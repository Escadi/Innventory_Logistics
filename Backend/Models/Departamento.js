module.exports = (sequelize, Sequelize) => {
    const Departamento = sequelize.define("Departamento", {
        IdDepartamento: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        NombreDepartamento: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */

    Departamento.associate = function (models) {
        Departamento.hasMany(models.Empleado, {
            foreignKey: "IdDepartamento",
            as: "empleado"
        });
    };

    return Departamento;
};