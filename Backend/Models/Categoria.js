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

    Categoria.associate = (models) => {
        // FK DE LAS QUE SE RELACIONAN CON ESTA TABLA
        Categoria.hasMany(models.producto, {
            foreignKey: "IdCategoria",
            as: "productos",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Categoria.hasMany(models.proveedor, {
            foreignKey: "IdCategoria",
            as: "proveedor",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return Categoria;

};