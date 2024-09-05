// Creación de un objeto usando un iniciador de objeto (notación literal)
let persona = {
    nombre: "Freddy",
    edad: 20,
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre}.`);
    }
};

// Probando el objeto
persona.saludar();  
