const configDB = require('../ConfigDB/ConfigDB.js');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    configDB.DATABASE,
    configDB.USER,
    configDB.PASSWORD,
    {
        host: configDB.HOST,
        dialect: configDB.DIALECT,
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        define: {
            freezeTableName: true,
            timestamps: false
        },

        pool: {
            max: configDB.pool.max,
            min: configDB.pool.min,
            acquire: configDB.pool.acquire,
            idle: configDB.pool.idle
        }
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

/**
 * -----------------------------------------------------------------------------------------------------
 * LLAMADA A CADA UNO DE LOS MODELOS
 * -----------------------------------------------------------------------------------------------------
 */

db.departamento = require('./Departamento.js')(sequelize, Sequelize);
db.cargo = require('./Cargo.js')(sequelize, Sequelize);
db.centroTrabajo = require('./CentroTrabajo.js')(sequelize, Sequelize);
db.empleado = require('./Empleado.js')(sequelize, Sequelize);
db.producto = require('./Productos.js')(sequelize, Sequelize);
db.categoria = require('./Categoria.js')(sequelize, Sequelize);
db.clientes = require('./Clientes.js')(sequelize, Sequelize);
db.pedido = require('./Pedido.js')(sequelize, Sequelize);
db.detallePedido = require('./DetallePedido.js')(sequelize, Sequelize);
db.ordenDeEntrega = require('./OrdenDeEntrega.js')(sequelize, Sequelize);
db.detalleProducto = require('./DetallesProducto.js')(sequelize, Sequelize);
db.proveedor = require('./Proveedor.js')(sequelize, Sequelize);
db.vehiculo = require('./Vehiculo.js')(sequelize, Sequelize);
db.tipoVehiculo = require('./tipoVehiculo.js')(sequelize, Sequelize);
db.conductor = require('./Conductor.js')(sequelize, Sequelize);
db.detalleCarrito = require('./DetalleCarrito.js')(sequelize, Sequelize);
db.login = require('./login.js')(sequelize, Sequelize);

/**
 * -----------------------------------------------------------------------------------------------------
 * CREA LAS RELACIONES ENTRE LAS TABLAS
 * -----------------------------------------------------------------------------------------------------
 */

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
module.exports = db;
