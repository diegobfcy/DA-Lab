const express = require('express');
const multer = require('multer');
const mysql = require('mysql2');
const path = require('path');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sistema_ing'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Conectado a MySQL');
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const specialty = req.body.especialidad; 
        const folder = `uploads/${specialty}`;
        cb(null, folder);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/upload-form', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'upload.html'));
});

app.post('/upload', upload.single('file'), (req, res) => {
    const { especialidad } = req.body;
    const filePath = path.join(__dirname, `uploads/${especialidad}/${req.file.originalname}`);

    const sql = 'INSERT INTO archivos (nombre_archivo, ruta_archivo, especialidad) VALUES (?, ?, ?)';
    connection.query(sql, [req.file.originalname, filePath, especialidad], (err, result) => {
        if (err) throw err;
        res.send('Archivo subido y guardado en la base de datos');
    });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});
