module.exports = (sequelize, Sequelize) => {
    const Clientes = sequelize.define("clientes", {
        cifCliente: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        nombreCliente: {
            type: Sequelize.STRING,
        },
        direccionCliente: {
            type: Sequelize.STRING,
        },
        telefonoCliente: {
            type: Sequelize.STRING,
        },
        correoCliente: {
            type: Sequelize.STRING,
        },
        codigoPostalCliente: {
            type: Sequelize.STRING,
        },
        ciudadCliente: {
            type: Sequelize.STRING,
        },
        paisCliente: {
            type: Sequelize.STRING,
        }
    });
    /**
     *-----------------------------------------------------------------------------------------------
     * CREA LAS RELACIONES ENTRE LAS TABLAS
     *-----------------------------------------------------------------------------------------------
     */

    Clientes.associate = (models) => {
        // CON QUE TABLAS SE RELACIONA ESTA TABLA
        Clientes.hasMany(models.pedido, {
            foreignKey: "idCliente",
            as: "pedido",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return Clientes;
};