module.exports = (sequelize, Sequelize) => {
    const Clientes = sequelize.define("clientes", {
        cifCliente: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        nombre: {
            type: Sequelize.STRING,
        },
        direccion: {
            type: Sequelize.STRING,
        },
        telefono: {
            type: Sequelize.STRING,
        },
        correo: {
            type: Sequelize.STRING,
        },
        codigoPostal: {
            type: Sequelize.STRING,
        },
        ciudad: {
            type: Sequelize.STRING,
        },
        pais: {
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