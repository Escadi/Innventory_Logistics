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

db.departamento = require('./Departamento.js')(sequelize, Sequelize);
db.cargo = require('./Cargo.js')(sequelize, Sequelize);
db.centroTrabajo = require('./CentroTrabajo.js')(sequelize, Sequelize);
db.empleado = require('./Empleado.js')(sequelize, Sequelize);
db.producto = require('./Producto.js')(sequelize, Sequelize);
db.tipoProducto = require('./TipoProducto.js')(sequelize, Sequelize);

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
