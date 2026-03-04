module.exports = (sequelize, Sequelize) => {
    const OrdenDeEntrega = sequelize.define("ordenDeEntrega", {
        IdOrdenDeEntrega: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        IdPedido: {
            type: Sequelize.INTEGER,

        },
        FechaEntrega: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW

        },
        idConductor: {
            type: Sequelize.INTEGER,

        },
        Estado: {
            type: Sequelize.STRING,
            defaultValue: "Pendiente"

        }
    });

    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */
    // QUE TABLAS RELACIONA CON ESTA TABLA DE DONDE VIENE CADA UNA


    OrdenDeEntrega.associate = function (models) {
        // FK DE LAS OTRAS TABLAS QUE SE RELACIONAN CON ESTA TABLA
        OrdenDeEntrega.belongsTo(models.Pedido, {
            foreignKey: "IdPedido",
            targetKey: "IdPedido",
            as: "Pedido",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return OrdenDeEntrega;
};