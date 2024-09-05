function Coche(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}

// Creación de una instancia y agregando una propiedad
let coche1 = new Coche("Honda", "Civic", 2019);
coche1.color = "Azul";

// Probando las propiedades
console.log(coche1);  // {marca: "Honda", modelo: "Civic", año: 2019, color: "Azul"}