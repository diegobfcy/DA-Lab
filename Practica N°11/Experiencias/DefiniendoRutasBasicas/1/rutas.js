const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
 res.send('¡Hola desde la página principal!');
});

router.get('/cursos', (req, res) => {
 res.send('¡Bienvenido a la sección cursos!');
});
module.exports = router;