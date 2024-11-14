const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const usuarios = [
    { id: 1, username: 'usuario1', password: '123456' },
    { id: 2, username: 'usuario2', password: 'abcdef' }
];

app.get('/', function(req, res) {
    res.send(`
        <h1>Bienvenido a mi sitio</h1>
        <ul>
            <li><a href="/login">Ir al login</a></li>
            <li><a href="/registro">Ir al registro</a></li>
            <li><a href="/usuarios">Ver usuarios</a></li>
        </ul>
    `);
});

app.get('/login', function(req, res) {
    res.send(`
        <h2>Página de Login</h2>
        <form action="/login" method="POST">
            <input type="text" name="username" placeholder="Usuario">
            <input type="password" name="password" placeholder="Contraseña">
            <button type="submit">Iniciar Sesión</button>
        </form>
    `);
});

app.post('/login', function(req, res) {
    const { username, password } = req.body;
    
    const usuario = usuarios.find(u => u.username === username && u.password === password);
    
    if (usuario) {
        res.send(`Bienvenido ${username}! Has iniciado sesión correctamente`);
    } else {
        res.send('Usuario o contraseña incorrectos');
    }
});


app.get('/registro', function(req, res) {
    res.send(`
        <h2>Página de Registro</h2>
        <form action="/registro" method="POST">
            <input type="text" name="username" placeholder="Nuevo Usuario">
            <input type="password" name="password" placeholder="Nueva Contraseña">
            <button type="submit">Registrarse</button>
        </form>
    `);
});

app.post('/registro', function(req, res) {
    const { username, password } = req.body;
    if (usuarios.some(u => u.username === username)) {
        res.send('Este nombre de usuario ya está en uso');
        return;
    }
    
    const nuevoUsuario = {
        id: usuarios.length + 1,
        username,
        password
    };
    usuarios.push(nuevoUsuario);
    
    res.send('Usuario registrado correctamente');
});

app.get('/usuarios', function(req, res) {
    const listaUsuarios = usuarios
        .map(u => `<li>Usuario: ${u.username}</li>`)
        .join('');
    
    res.send(`
        <h2>Lista de Usuarios</h2>
        <ul>${listaUsuarios}</ul>
        <a href="/">Volver al inicio</a>
    `);
});
app.use(function(req, res) {
    res.status(404).send(`
        <h1>Página no encontrada</h1>
        <p>Lo sentimos, la página que buscas no existe.</p>
        <a href="/">Volver al inicio</a>
    `);
});

const PORT = 3000;
app.listen(PORT, function() {
    console.log(`La aplicación está funcionando en el puerto ${PORT}`);
});