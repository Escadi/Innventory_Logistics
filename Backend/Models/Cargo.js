module.exports = (sequelize, Sequelize) => {
    const Cargo = sequelize.define("cargo", {
        idCargo: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreCargo: {
            type: Sequelize.STRING,
        }
    });
    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */

    Cargo.associate = function (models) {
        // CON QUE TABLAS SE RELACIONA ESTA TABLA
        Cargo.hasMany(models.Empleado, {
            foreignKey: "idCargo",
            as: "Empleado",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return Cargo;
};