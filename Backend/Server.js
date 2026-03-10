require("dotenv").config();
const express = require("express");
const app = express();
const ngrok = require('@ngrok/ngrok');
const path = require('path');
const jwt = require('jsonwebtoken');


app.use((req, res, next) => {
    // Reflect origin to support credentials if needed
    const origin = req.headers.origin;
    if (origin) {
        res.header("Access-Control-Allow-Origin", origin);
    } else {
        res.header("Access-Control-Allow-Origin", "*");
    }

    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, ngrok-skip-browser-warning");
    res.header("Access-Control-Allow-Credentials", "true");

    // Explicitly handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).send();
    }
    next();
});




// DEBUG LOGGING
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Custom route to bypass ngrok warning for images
app.get('/api/images/:filename', (req, res) => {
    const filename = req.params.filename;
    console.log(filename);
    const imagePath = path.join(__dirname, 'public/images', filename);

    // Check if file exists
    if (require('fs').existsSync(imagePath)) {
        res.setHeader('ngrok-skip-browser-warning', 'true');
        res.sendFile(imagePath);
    } else {
        res.status(404).send('Image not found');
    }
});

//DIRECTORIO PUBLICO DE MULTER PARA GUARDAR Y VER LAS IMAGENES
app.use(express.static(path.join(__dirname, 'public')));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/**
 * ------------------------------------------------------------------------------------------------
 * VALIDACION DE TOKEN BÁSICO PARA EL USUARIO Y CONTRASEÑA
 * ------------------------------------------------------------------------------------------------
 */
app.use((req, res, next) => {
    const tokenHeader = req.headers['authorization'] || req.header('authorization');
    
    if (!tokenHeader) {
        return next();
    }

    if (tokenHeader.toLowerCase().startsWith('basic ')) {
        const base64Credentials = tokenHeader.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [idEmpleado, contrasena] = credentials.split(':');
        
        if (!req.body) req.body = {};
        req.body.idEmpleado = idEmpleado;
        req.body.contrasena = contrasena;

        return next();
    }
    
    const token = tokenHeader.replace(/Bearer /i, '');
    jwt.verify(token, process.env.JWT_SECRET || "secret-key", (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.user = decoded;
        next();
    });

});


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


//iniciarDB();
actualizarDB();
//eliminarDB();


/**------------------------------------------------------------------------------
 * IMPORTAMOS LAS RUTAS DESDE EL INDEX DE ROUTER
 * ------------------------------------------------------------------------------
 */

require('./Router/RouteIndex')(app);


const PORT = process.env.DB_PORT;
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);

    // Only use ngrok in development
    if (process.env.NODE_ENV !== 'production') {
        try {
            const listener = await ngrok.connect({
                addr: PORT,
                authtoken: process.env.NGROK_API
            }); // conectamos NGROK desde .env con | process.env.NGROK_API |
            console.log('\n========================================');
            console.log(' NGROK URL:', listener.url());
            console.log('========================================\n');
            console.log('Copy this URL to your frontend service!');
        } catch (error) {
            console.error('Error connecting to ngrok:', error);
        }
    }
});