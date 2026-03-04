module.exports = (sequelize, Sequelize) => {
    const DetalleCarrito = sequelize.define("DetalleCarrito", {
        IdDetalleCarrito: {
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


    DetalleCarrito.associate = function (models) {
        // FK DE LAS OTRAS TABLAS QUE SE RELACIONAN CON ESTA TABLA
        DetalleCarrito.belongsTo(models.DetallesProducto, {
            foreignKey: "IdDetalleProducto",
            targetKey: "IdDetalleProducto",
            as: "DetallesProducto",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return DetalleCarrito;
};