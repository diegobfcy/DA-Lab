// Importar el módulo http
const http = require('http');
// Crear un servidor
const servidor = http.createServer((request, response) => {
 // Establecer el código de estado de la respuesta
 response.statusCode = 200;
 // Establecer el tipo de contenido de la respuesta
 response.setHeader('Content-Type', 'text/plain');
 // Enviar la respuesta
 response.end('¡Hola Mundo desde mi servidor Node.js!');
});
// Hacer que el servidor escuche en el puerto 3000
const puerto = 3000;
servidor.listen(puerto, () => {
 console.log(`El servidor está escuchando en el puerto ${puerto}`);
});
