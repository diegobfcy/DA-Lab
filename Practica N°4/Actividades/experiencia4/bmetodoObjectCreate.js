let cocheProto = {
    arrancar: function() {
        console.log("El coche ha arrancado.");
    }
};

// Creación de un objeto y agregando propiedades
let coche2 = Object.create(cocheProto);
coche2.marca = "Ford";
coche2.modelo = "Fiesta";
coche2.año = 2021;
coche2.color = "Negro";

// Probando las propiedades
console.log(coche2);  // {marca: "Ford", modelo: "Fiesta", año: 2021, color: "Negro"}