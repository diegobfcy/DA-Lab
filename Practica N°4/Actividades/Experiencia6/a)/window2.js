function usarMetodosWindow() {
    window.alert("Este es un mensaje de alerta");
    let confirmacion = window.confirm("¿Quieres continuar?");
    if (confirmacion) {
        window.open("https://www.google.com", "_blank");
    }
}
usarMetodosWindow();
