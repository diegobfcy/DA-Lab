function agregarNumero(array, numero) {
    array.push(numero);
}

function agregarPalabra(array, palabra) {
    array.push(palabra);
}

function agregarObjeto(array, objeto) {
    array.push(objeto);
}

let numeros = [1, 2, 3, 4, 5]; 
let numeros2 = new Array(6, 7, 8, 9, 10);
let numeros3 = Array.of(11, 12, 13, 14, 15); 

let palabras = ['hola', 'mundo', 'javascript']; 
let palabras2 = new Array('programar', 'es', 'divertido'); 
let palabras3 = Array.of('arreglo', 'de', 'strings'); 

let objetos = [{nombre: 'Juan'}, {nombre: 'María'}, {nombre: 'Pedro'}]; 
let objetos2 = new Array({nombre: 'Ana'}, {nombre: 'Carlos'}, {nombre: 'Laura'}); 
let objetos3 = Array.of({nombre: 'Luis'}, {nombre: 'Sofia'}); 

agregarNumero(numeros, 20);
agregarPalabra(palabras, 'nuevo');
agregarObjeto(objetos, {nombre: 'Fernando'});

console.log(numeros);
console.log(palabras);
console.log(objetos);

document.getElementById('resultadoNumeros').innerHTML = numeros;
document.getElementById('resultadoPalabras').innerHTML = palabras;
document.getElementById('resultadoObjetos').innerHTML = JSON.stringify(objetos);
