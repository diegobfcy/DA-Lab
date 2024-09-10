numeros.push(30); // Agregar al final
numeros.pop(); // Eliminar el último
numeros.splice(1, 0, 100); // Insertar en la posición 1

//Ordenar y filtrar
let numerosOrdenados = numeros.sort((a, b) => a - b);
let numerosFiltrados = numeros.filter(num => num > 10);

console.log(numerosOrdenados);
console.log(numerosFiltrados);
