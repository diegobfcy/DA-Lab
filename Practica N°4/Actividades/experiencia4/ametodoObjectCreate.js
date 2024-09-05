// Creación de un objeto utilizando Object.create()
let personaProto = {
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre}.`);
    }
};

let persona2 = Object.create(personaProto);
persona2.nombre = "Julito";
persona2.edad = 19;


persona2.saludar();  