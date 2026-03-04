module.exports = (sequelize, Sequelize) => {
    const Categoria = sequelize.define("Categoria", {
        IdCategoria: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        NombreCategoria: {
            type: Sequelize.STRING,

        }
    });

    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */

    Categoria.associate = function (models) {
        // FK DE LAS QUE SE RELACIONAN CON ESTA TABLA
        Categoria.hasMany(models.Producto, {
            foreignKey: "IdCategoria",
            as: "Productos",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Categoria.hasMany(models.Proveedor, {
            foreignKey: "IdCategoria",
            as: "Proveedor",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return Categoria;

};