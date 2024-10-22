const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

const dbAerolinea = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'diego339067',
    database: 'aerolinea'
});

const dbInscripcion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'diego339067',
    database: 'inscripcion'
});

dbInscripcion.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos: ' + err);
        return;
    }
    console.log('Conexión establecida con la base de datos de inscripción');
});

// Endpoint para registrar un nuevo usuario
app.post('/registrar_usuario', (req, res) => {
    const { nombre, correo, contrasena, fecha_nacimiento, sexo, intereses, aficiones } = req.body;
    const sql = `INSERT INTO usuario (nombre, correo, contrasena, fecha_nacimiento, sexo, intereses, aficiones) VALUES (?, ?, ?, ?, ?, ?, ?)`;

    dbInscripcion.query(sql, [nombre, correo, contrasena, fecha_nacimiento, sexo, intereses, aficiones], (err, result) => {
        if (err) {
            console.error('Error al registrar el usuario en la base de datos: ' + err);
            res.status(500).send('Error al registrar el usuario');
            return;
        }
        res.json({ message: "Usuario registrado correctamente", userId: result.insertId });
    });
});


dbAerolinea.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos: ' + err);
        return;
    }
    console.log('Conexión establecida con la base de datos');
});

app.post('/calcular_precio', (req, res) => {
    const { nombre, fecha_nacimiento, precio_base } = req.body;
    const hoy = new Date();
    const fechaNac = new Date(fecha_nacimiento);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }

    let precio_final;
    if (edad >= 18) {
        precio_final = precio_base;
    } else if (edad >= 2) {
        precio_final = precio_base * 0.75;
    } else {
        precio_final = 0;
    }

    const sql = `INSERT INTO pasajeros (nombre, fecha_nacimiento, precio_base, precio_final) VALUES (?, ?, ?, ?)`;
    dbAerolinea.query(sql, [nombre, fecha_nacimiento, precio_base, precio_final], (err, result) => {
        if (err) {
            console.error('Error al guardar en la base de datos: ' + err);
            res.status(500).send('Error al guardar los datos del pasajero');
            return;
        }
        res.json({ edad, precio_final, message: "Pasajero guardado correctamente" });
    });
});

app.listen(3004, () => {
    console.log('Servidor corriendo en el puerto 3004');
});

