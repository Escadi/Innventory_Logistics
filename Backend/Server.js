require("dotenv").config();
const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./Models');

/**------------------------------------------------------------------------------
 * ACTUALIZAMOS LA BASE DE DATOS CUANDO CREAMOS UNA NUEVA TABLA
 * O MODIFICAMOS UNA EXISTENTE
 * ------------------------------------------------------------------------------
 */
function actualizarDB() {
    db.sequelize.sync({ alter: true })
        .then(() => {
            console.log("\n Database schema updated successfully!\n");
        })
        .catch(err => {
            console.error("\nCRITICAL DATABASE ERROR:\n", err.message);

        });
}
/**------------------------------------------------------------------------------
 * INICIAMOS LA BASE DE DATOS
 * ------------------------------------------------------------------------------
 */
function iniciarDB() {
    db.sequelize.sync().then(() => {
        console.log("Database initialized successfully");
    }).catch(err => {
        console.error("\nCRITICAL DATABASE ERROR:\n", err.message);
    });
}
/**------------------------------------------------------------------------------
 * ELIMINAMOS LA BASE DE DATOS Y LA VOLVEMOS A CREAR
 * ------------------------------------------------------------------------------
 */
function eliminarDB() {
    db.sequelize.sync({ force: true }).then(() => {
        console.log("Drop and re-sync db");
    }).catch(err => {
        console.error("\nCRITICAL DATABASE ERROR:\n", err.message);
    });
}


iniciarDB();
//actualizarDB();
//eliminarDB();


/**------------------------------------------------------------------------------
 * IMPORTAMOS LAS RUTAS DESDE EL INDEX DE ROUTER
 * ------------------------------------------------------------------------------
 */
require('./Router/RouteIndex')(app);


const port = 8080;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});