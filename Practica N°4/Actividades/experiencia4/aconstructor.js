//Objeto creado con un constructor

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
        console.log(`Hola, mi nombre es ${this.nombre}.`);
    };
}

// Creación de una instancia del objeto
let persona1 = new Persona("David", 20);
persona1.saludar();  