function mostrarPropiedadesWindow() {
    for (let prop in window) {
        console.log(`${prop}: ${window[prop]}`);
    }
}
mostrarPropiedadesWindow();
