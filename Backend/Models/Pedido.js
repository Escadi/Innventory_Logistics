module.exports = (sequelize, Sequelize) => {
    const Pedido = sequelize.define("pedido", {
        idPedido: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idCliente: {
            type: Sequelize.INTEGER,

        },
        idCentro: {
            type: Sequelize.INTEGER,

        },
        idEmpleado: {
            type: Sequelize.INTEGER,

        },
        fechaPedido: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW

        },
        estado: {
            type: Sequelize.STRING,
            defaultValue: "Pendiente"
        }
    });

    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */
    Pedido.associate = function (models) {
        // FK DE LAS OTRAS TABLAS QUE SE RELACIONAN CON ESTA TABLA
        Pedido.belongsTo(models.OrdenDeEntrega, {
            foreignKey: "idPedido",
            targetKey: "idPedido",
            as: "OrdenDeEntrega",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Pedido.belongsTo(models.Clientes, {
            foreignKey: "idCliente",
            targetKey: "idCliente",
            as: "Clientes",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Pedido.belongsTo(models.CentroTrabajo, {
            foreignKey: "idCentro",
            targetKey: "idCentro",
            as: "CentroTrabajo",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Pedido.belongsTo(models.Empleado, {
            foreignKey: "idEmpleado",
            targetKey: "idEmpleado",
            as: "Empleado",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });

        // QUE TABLAS SE RELACIONAN CON ESTA TABLA
        Pedido.hasMany(models.DetallePedido, {
            foreignKey: "idPedido",
            as: "DetallePedido",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Pedido.hasMany(models.OrdenDeEntrega, {
            foreignKey: "idPedido",
            as: "OrdenDeEntrega",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return Pedido;
};