module.exports = (sequelize, Sequelize) => {
    const Producto = sequelize.define("producto", {
        idProducto: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        nombreProducto: {
            type: Sequelize.STRING,

        },
        descripcion: {
            type: Sequelize.STRING,
        },
        precio: {
            type: Sequelize.DECIMAL(10, 2),
        },
        idEmpleado: {
            type: Sequelize.INTEGER,

        },
        idProveedor: {
            type: Sequelize.INTEGER,

        },
        idCategoria: {
            type: Sequelize.INTEGER,

        },
        filename: {
            type: Sequelize.STRING,
        }
    });
    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */

    Producto.associate = (models) => {
        // FK DE LAS OTRAS TABLAS QUE SE RELACIONAN CON ESTA TABLA
        Producto.belongsTo(models.empleado, {
            foreignKey: "idEmpleado",
            targetKey: "idEmpleado",
            as: "empleado",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Producto.belongsTo(models.proveedor, {
            foreignKey: "idProveedor",
            targetKey: "CifProveedor",
            as: "proveedor",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Producto.belongsTo(models.categoria, {
            foreignKey: "idCategoria",
            targetKey: "idCategoria",
            as: "categoria",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return Producto;
};