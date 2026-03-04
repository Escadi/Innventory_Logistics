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
    Pedido.associate = (models) => {
        // FK DE LAS OTRAS TABLAS QUE SE RELACIONAN CON ESTA TABLA
        Pedido.belongsTo(models.clientes, {
            foreignKey: "idCliente",
            targetKey: "cifCliente",
            as: "clientes",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Pedido.belongsTo(models.centroTrabajo, {
            foreignKey: "idCentro",
            targetKey: "idCentro",
            as: "centroTrabajo",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Pedido.belongsTo(models.empleado, {
            foreignKey: "idEmpleado",
            targetKey: "idEmpleado",
            as: "empleado",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });

        // QUE TABLAS SE RELACIONAN CON ESTA TABLA
        Pedido.hasMany(models.detallePedido, {
            foreignKey: "idPedido",
            as: "detallePedido",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        Pedido.hasMany(models.ordenDeEntrega, {
            foreignKey: "idPedido",
            as: "ordenDeEntrega",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return Pedido;
};