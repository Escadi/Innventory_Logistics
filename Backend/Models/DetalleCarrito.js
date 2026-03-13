module.exports = (sequelize, Sequelize) => {
    const DetalleCarrito = sequelize.define("detalleCarrito", {
        idDetalleCarrito: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idDetalleProducto: {
            type: Sequelize.INTEGER,

        },
        cantidad: {
            type: Sequelize.INTEGER,

        }
    });

    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */
    // QUE TABLAS RELACIONA CON ESTA TABLA DE DONDE VIENE CADA UNA


    DetalleCarrito.associate = (models) => {
        // FK DE LAS OTRAS TABLAS QUE SE RELACIONAN CON ESTA TABLA
        DetalleCarrito.belongsTo(models.detalleProducto, {
            foreignKey: "idDetalleProducto",
            targetKey: "idDetalleProducto",
            as: "detallesProducto",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return DetalleCarrito;
};