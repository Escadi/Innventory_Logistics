module.exports = (sequelize, Sequelize) => {
    const DetallePedido = sequelize.define("detallePedido", {
        IdDetallePedido: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        IdDetalleProducto: {
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


    DetallePedido.associate = (models) => {
        // FK DE LAS OTRAS TABLAS QUE SE RELACIONAN CON ESTA TABLA
        DetallePedido.belongsTo(models.detalleProducto, {
            foreignKey: "IdDetalleProducto",
            targetKey: "idDetalle",
            as: "detallesProducto",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        DetallePedido.belongsTo(models.pedido, {
            foreignKey: "idPedido",
            targetKey: "idPedido",
            as: "pedido",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return DetallePedido;
};