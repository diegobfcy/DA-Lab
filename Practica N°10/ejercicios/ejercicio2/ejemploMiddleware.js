const express = require('express');
const morgan = require('morgan');

const app = express();


app.use(morgan('dev')); 

const logger = (req, res, next) => {
    console.log(`Nueva petición a la ruta: ${req.url}`);
    next();
};

app.use(logger);


app.get('/', (req, res) => {
    res.send('Bienvenido a Express');
});

app.get('/hora', (req, res) => {
    const hora = new Date().toLocaleTimeString();
    res.send(`La hora actual es ${hora}`);
});

app.get('/info', (req, res) => {
    res.json({
        servidor: 'ejercicio2',
        version: '4.1',
        desarrollador: 'diegobfcy'
    });
});

const PORT = 3007;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});