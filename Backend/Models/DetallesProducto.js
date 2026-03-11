module.exports = (sequelize, Sequelize) => {
    const DetallesProducto = sequelize.define("detallesProducto", {
        idDetalle: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idProducto: {
            type: Sequelize.STRING,

        },
        idDepartamento: {
            type: Sequelize.INTEGER,

        },
        idCentro: {
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


    DetallesProducto.associate = (models) => {
        // FK DE LAS OTRAS TABLAS QUE SE RELACIONAN CON ESTA TABLA
        DetallesProducto.belongsTo(models.producto, {
            foreignKey: "idProducto",
            targetKey: "idProducto",
            as: "producto",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        DetallesProducto.belongsTo(models.departamento, {
            foreignKey: "idDepartamento",
            targetKey: "idDepartamento",
            as: "departamento",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        DetallesProducto.belongsTo(models.centroTrabajo, {
            foreignKey: "idCentro",
            targetKey: "idCentro",
            as: "centroTrabajo",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        })

        // QUE TABLAS SE RELACIONAN CON ESTA TABLA
        DetallesProducto.hasMany(models.detalleCarrito, {
            foreignKey: "idDetalleProducto",
            as: "detalleCarrito",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        DetallesProducto.hasMany(models.detallePedido, {
            foreignKey: "idDetalleProducto",
            as: "detallePedido",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return DetallesProducto;
};