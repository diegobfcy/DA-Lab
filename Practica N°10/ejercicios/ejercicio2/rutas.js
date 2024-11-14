// routes/index.js
const express = require('express');
const router = express.Router();
router.get('/', function(req, res) {
    res.send(`
        <h1>Página Principal</h1>
        <nav>
            <ul>
                <li><a href="/login">Login</a></li>
                <li><a href="/productos">Productos</a></li>
            </ul>
        </nav>
    `);
});

router.get('/login', function(req, res) {
    res.send(`
        <h2>Login</h2>
        <form>
            <input type="text" placeholder="Usuario">
            <input type="password" placeholder="Contraseña">
            <button type="submit">Entrar</button>
        </form>
    `);
});

router.get('/productos', function(req, res) {
    const productos = [
        'Laptop',
        'Smartphone',
        'Tablet'
    ];
    
    const lista = productos
        .map(producto => `<li>${producto}</li>`)
        .join('');
    
    res.send(`
        <h2>Catálogo de Productos</h2>
        <ul>${lista}</ul>
        <a href="/productos/comprar">Ir a comprar</a>
    `);
});

router.get('/productos/comprar', function(req, res) {
    res.send(`
        <h2>Carrito de Compra</h2>
        <p>Aquí puedes realizar tus compras</p>
        <a href="/productos">Volver al catálogo</a>
    `);
});

module.exports = router;