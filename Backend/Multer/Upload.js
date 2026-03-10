const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ruta absoluta al directorio de imágenes
const uploadDir = path.join(__dirname, '../public/images');

// CREAR CARPETA NUEVA /public/images SI NO EXISTE
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// CONFIGURA EL ALMACENAMIENTO 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        if (!ext && file.mimetype) {
            ext = '.' + file.mimetype.split('/')[1];
            if (ext === '.jpeg') ext = '.jpg';
        }
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

// Filtro de archivos (solo imágenes)
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    // La extensión puede venir vacía si se convierte un blob de cámara, por lo que mimetype es principal
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype) {
        return cb(null, true);
    } else {
        cb(new Error('Error: Solo se permiten imágenes (jpeg, jpg, png, gif, webp)'));
    }
};

const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 10 }, // Límite de 10MB
    fileFilter: fileFilter
});

module.exports = upload;