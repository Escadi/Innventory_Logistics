module.exports = (sequelize, Sequelize) => {
    const Cargo = sequelize.define("Cargo", {
        IdCargo: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        NombreCargo: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */

    Cargo.associate = function (models) {
        Cargo.hasMany(models.Empleado, {
            foreignKey: "IdCargo",
            as: "Empleado",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return Cargo;
};