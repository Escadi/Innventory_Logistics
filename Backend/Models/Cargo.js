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

    Cargo.associate = (models) => {
        // CON QUE TABLAS SE RELACIONA ESTA TABLA
        Cargo.hasMany(models.empleado, {
            foreignKey: "idCargo",
            as: "empleado",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return Cargo;
};