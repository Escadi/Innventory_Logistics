module.exports = (sequelize, Sequelize) => {
    const Categoria = sequelize.define("categoria", {
        idCategoria: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreCategoria: {
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