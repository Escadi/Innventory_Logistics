module.exports = (sequelize, Sequelize) => {
    const OrdenDeEntrega = sequelize.define("ordenDeEntrega", {
        idOrdenDeEntrega: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idPedido: {
            type: Sequelize.STRING,

        },
        fechaSalida: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        observaciones: {
            type: Sequelize.STRING,
        },
        dniReceptor: {
            type: Sequelize.STRING,
        },
        bultos: {
            type: Sequelize.INTEGER,
        },
        totalArticulos: {
            type: Sequelize.INTEGER,
        },
        nombreReceptor: {
            type: Sequelize.STRING,
        },
        fechaEntrega: {
            type: Sequelize.DATE,

        },
        idConductor: {
            type: Sequelize.INTEGER,

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
    // QUE TABLAS RELACIONA CON ESTA TABLA DE DONDE VIENE CADA UNA


    OrdenDeEntrega.associate = (models) => {
        // FK DE LAS OTRAS TABLAS QUE SE RELACIONAN CON ESTA TABLA
        OrdenDeEntrega.belongsTo(models.pedido, {
            foreignKey: "idPedido",
            targetKey: "idPedido",
            as: "pedido",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
        OrdenDeEntrega.belongsTo(models.conductor, {
            foreignKey: "idConductor",
            targetKey: "idConductor",
            as: "conductor",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return OrdenDeEntrega;
};