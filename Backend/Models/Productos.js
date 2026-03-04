module.exports = (sequelize, Sequelize) => {
    const Producto = sequelize.define("Producto", {
        IdProducto: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nombre: {
            type: Sequelize.STRING,

        },
        IdEmpleado: {
            type: Sequelize.INTEGER,

        },
        IdProveedor: {
            type: Sequelize.INTEGER,

        },
        IdCategoria: {
            type: Sequelize.INTEGER,

        }
    });
    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */
    // QUE TABLAS RELACIONA CON ESTA TABLA DE DONDE VIENE CADA UNA


    Producto.associate = function (models) {
        // FK DE LAS OTRAS TABLAS QUE SE RELACIONAN CON ESTA TABLA
        Producto.belongsTo(models.Empleado, {
            foreignKey: "IdEmpleado",
            targetKey: "IdEmpleado",
            as: "Empleado",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Producto.belongsTo(models.Proveedor, {
            foreignKey: "IdProveedor",
            targetKey: "IdProveedor",
            as: "Proveedor",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Producto.belongsTo(models.Categoria, {
            foreignKey: "IdCategoria",
            targetKey: "IdCategoria",
            as: "Categoria",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return Producto;
};