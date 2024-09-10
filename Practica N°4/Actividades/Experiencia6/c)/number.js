function mostrarPropiedadesNumber() {
    for (let prop in Number) {
        console.log(`${prop}: ${Number[prop]}`);
    }
}
mostrarPropiedadesNumber();
