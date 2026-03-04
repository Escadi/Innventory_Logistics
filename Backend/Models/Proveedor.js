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

        }
    });

    /**
     *-----------------------------------------------------------------------------------------------
     * A QUE TABLA SE RELACIONA ESTA TABLA 
     *-----------------------------------------------------------------------------------------------
     */

    Proveedor.associate = function (models) {
        // FK DE LAS QUE SE RELACIONAN CON ESTA TABLA
        Proveedor.hasMany(models.Producto, {
            foreignKey: "idProveedor",
            as: "Productos",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });

        // FK DE LAS OTRAS TABLAS QUE SE RELACIONAN CON ESTA TABLA
        Proveedor.belongsTo(models.Categoria, {
            foreignKey: "idCategoria",
            targetKey: "idCategoria",
            as: "Categoria",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return Proveedor;
};