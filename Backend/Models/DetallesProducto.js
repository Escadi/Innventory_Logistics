module.exports = (sequelize, Sequelize) => {
    const DetallesProducto = sequelize.define("detallesProducto", {
        idDetalle: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        IdProducto: {
            type: Sequelize.INTEGER,

        },
        IdDepartamento: {
            type: Sequelize.INTEGER,

        },
        Cantidad: {
            type: Sequelize.INTEGER,

        }
    });

    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */
    // QUE TABLAS RELACIONA CON ESTA TABLA DE DONDE VIENE CADA UNA


    DetallesProducto.associate = function (models) {
        // FK DE LAS OTRAS TABLAS QUE SE RELACIONAN CON ESTA TABLA
        DetallesProducto.belongsTo(models.Producto, {
            foreignKey: "IdProducto",
            targetKey: "IdProducto",
            as: "Producto",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        DetallesProducto.belongsTo(models.Departamento, {
            foreignKey: "IdDepartamento",
            targetKey: "IdDepartamento",
            as: "Departamento",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });

        // QUE TABLAS SE RELACIONAN CON ESTA TABLA
        DetallesProducto.hasMany(models.DetalleCarrito, {
            foreignKey: "IdDetalleProducto",
            as: "DetalleCarrito",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return DetallesProducto;
};