const express = require('express');
const app = express();
const PORT = 3006;

app.use(express.json());

let usuarios = [
    { id: 1, nombre: 'julio' },
    { id: 2, nombre: 'giaccomo' },
    { id: 3, nombre: 'freddy' }
];
app.get('/usuarios', (req, res) => {
    res.status(200).json(usuarios);
});
app.get('/usuarios/:id', (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) {
        res.status(404).send('No hay');
    } else {
        res.status(200).json(usuario);
    }
});
app.post('/usuarios', (req, res) => {
    const usuario = {
        id: usuarios.length + 1,
        nombre: req.body.nombre
    };
    usuarios.push(usuario);
    res.status(201).send(usuario);
});

app.put('/usuarios/:id', (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) {
        res.status(404).send('No hay');
    } else {
        usuario.nombre = req.body.nombre;
        res.status(200).send(usuario);
    }
});


app.delete('/usuarios/:id', (req, res) => {
    const index = usuarios.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) {
        res.status(404).send('No hay');
    } else {
        usuarios = usuarios.filter(u => u.id !== parseInt(req.params.id));
        res.status(204).send();
    }
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
