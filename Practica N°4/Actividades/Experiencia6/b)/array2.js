function usarMetodosArray() {
    let numeros = [1, 2, 3, 4, 5];
    numeros.push(6);
    let dobles = numeros.map(num => num * 2);
    let mayoresQueTres = numeros.filter(num => num > 3);
    
    console.log("Numeros: ", numeros);
    console.log("Dobles: ", dobles);
    console.log("Mayores que tres: ", mayoresQueTres);
}
usarMetodosArray();
    