const express = require('express');
const app = express();
const rutas = require('./rutas'); 

app.use('/', rutas);

const puerto = 3000;
app.listen(puerto, () => {
 console.log(`El servidor está escuchando en el puerto ${puerto}`);
});