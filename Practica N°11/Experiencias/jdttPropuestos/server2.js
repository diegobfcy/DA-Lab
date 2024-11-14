require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
const verificarToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).send('se requiere token');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded;
        next();
    } catch (err) {
        return res.status(401).send('invalido');
    }
};
app.post('/login', (req, res) => {
    const usuario = {
        id: 1,
        nombre: 'diego',
        email: 'diegobfcy@gmail.com'
    };

    const token = jwt.sign({ usuario }, process.env.JWT_SECRET, { expiresIn: '300s' });
    res.send({ token });
});
app.get('/datos', verificarToken, (req, res) => {
    res.json({ mensaje: "Acceso consedio", usuario: req.usuario });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
