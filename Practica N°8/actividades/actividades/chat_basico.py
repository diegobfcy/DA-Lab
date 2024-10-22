import reflex as rx
class Mensaje(rx.Component):
    def __init__(self, usuario: str, texto: str):
        super().__init__()
        self.usuario = usuario
        self.texto = texto
    def render(self):
        return rx.box(
        rx.text(f"{self.usuario}: {self.texto}"),
        bg="lightblue",
        margin="5px",
        padding="10px",
        border_radius="5px",
        )
class Chat(rx.Component):
    def __init__(self, mensajes: list = []):
        super().__init__()
        self.mensajes = mensajes
    def render(self):
        return rx.vstack(
        [Mensaje(mensaje, mensaje) for mensaje in self.mensajes],
        width="400px",
        height="300px",
        border="1px solid gray",
        overflow_y="scroll",
        )
@rx.page(route="/")
def index():
    conversaciones = [
        [("Usuario 1", "¡Hola!"), ("Usuario 2", "¿Cómo estás?")],
        [("Persona A", "Buenos días"), ("Persona B", "Hola, ¿qué tal?")]
    ]
    return rx.hstack(
        [Chat(mensajes=conversacion) for conversacion in conversaciones],
        spacing="20px",
    )