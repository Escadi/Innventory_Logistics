module.exports = (sequelize, Sequelize) => {
    const Proveedor = sequelize.define("proveedor", {
        CifProveedor: {
            type: Sequelize.INTEGER,
            primaryKey: true,

        },
        nombreProveedor: {
            type: Sequelize.STRING,

        },
        direccionProveedor: {
            type: Sequelize.STRING,

        },
        telefonoProveedor: {
            type: Sequelize.STRING,

        },
        emailProveedor: {
            type: Sequelize.STRING,

        },
        idCategoria: {
            type: Sequelize.INTEGER,

        }
    });

    /**
     *-----------------------------------------------------------------------------------------------
     * A QUE TABLA SE RELACIONA ESTA TABLA 
     *-----------------------------------------------------------------------------------------------
     */

    Proveedor.associate = (models) => {
        // FK DE LAS QUE SE RELACIONAN CON ESTA TABLA
        Proveedor.hasMany(models.producto, {
            foreignKey: "idProveedor",
            as: "productos",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });

        // FK DE LAS OTRAS TABLAS QUE SE RELACIONAN CON ESTA TABLA
        Proveedor.belongsTo(models.categoria, {
            foreignKey: "idCategoria",
            targetKey: "idCategoria",
            as: "categoria",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return Proveedor;
};