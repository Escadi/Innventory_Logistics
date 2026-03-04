module.exports = (sequelize, Sequelize) => {
    const Proveedor = sequelize.define("Proveedor", {
        IdProveedor: {
            type: Sequelize.INTEGER,
            primaryKey: true,

        },
        NombreProveedor: {
            type: Sequelize.STRING,

        },
        Direccion: {
            type: Sequelize.STRING,

        },
        Telefono: {
            type: Sequelize.STRING,

        },
        Email: {
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
            foreignKey: "IdProveedor",
            as: "Productos",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });

        // FK DE LAS OTRAS TABLAS QUE SE RELACIONAN CON ESTA TABLA
        Proveedor.belongsTo(models.Categoria, {
            foreignKey: "IdCategoria",
            targetKey: "IdCategoria",
            as: "Categoria",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };

    return Proveedor;
};