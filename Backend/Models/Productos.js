module.exports = (sequelize, Sequelize) => {
    const Producto = sequelize.define("producto", {
        idProducto: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreProducto: {
            type: Sequelize.STRING,

        },
        idEmpleado: {
            type: Sequelize.INTEGER,

        },
        idProveedor: {
            type: Sequelize.INTEGER,

        },
        idCategoria: {
            type: Sequelize.INTEGER,

        }
    });
    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */

    Producto.associate = function (models) {
        // FK DE LAS OTRAS TABLAS QUE SE RELACIONAN CON ESTA TABLA
        Producto.belongsTo(models.Empleado, {
            foreignKey: "idEmpleado",
            targetKey: "idEmpleado",
            as: "Empleado",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Producto.belongsTo(models.Proveedor, {
            foreignKey: "idProveedor",
            targetKey: "idProveedor",
            as: "Proveedor",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Producto.belongsTo(models.Categoria, {
            foreignKey: "idCategoria",
            targetKey: "idCategoria",
            as: "Categoria",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return Producto;
};