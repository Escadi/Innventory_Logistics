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


    DetallesProducto.associate = (models) => {
        // FK DE LAS OTRAS TABLAS QUE SE RELACIONAN CON ESTA TABLA
        DetallesProducto.belongsTo(models.producto, {
            foreignKey: "IdProducto",
            targetKey: "idProducto",
            as: "producto",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        DetallesProducto.belongsTo(models.departamento, {
            foreignKey: "IdDepartamento",
            targetKey: "idDepartamento",
            as: "departamento",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });

        // QUE TABLAS SE RELACIONAN CON ESTA TABLA
        DetallesProducto.hasMany(models.detalleCarrito, {
            foreignKey: "IdDetalleProducto",
            as: "detalleCarrito",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        DetallesProducto.hasMany(models.detallePedido, {
            foreignKey: "IdDetalleProducto",
            as: "detallePedido",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return DetallesProducto;
};