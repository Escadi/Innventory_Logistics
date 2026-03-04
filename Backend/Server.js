require("dotenv").config();
const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./Models');

function actualizarDB() {
    db.sequelize.sync({ alter: true })
        .then(() => {
            console.log("\n Database schema updated successfully!\n");
        })
        .catch(err => {
            console.error("\nCRITICAL DATABASE ERROR:\n", err.message);

        });
}
function iniciarDB() {
    db.sequelize.sync().then(() => {
        console.log("Database initialized successfully");
    });
}

function eliminarDB() {
    db.sequelize.sync({ force: true }).then(() => {
        console.log("Drop and re-sync db");
    });
}

//iniciarDB();
actualizarDB();
//eliminarDB();
app.get("/", (req, res) => {
    res.send("Hello World!");
});

const port = 8080;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});