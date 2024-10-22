import reflex as rx
class Contador(rx.State):

    def __init__(self):
        super().__init__()
        self.count = 0 
    def incrementar(self):
        self.count += 1
    def disminuir(self):
        self.count -= 1

def mi_componente():
    contador = Contador()
    return rx.vstack(
        rx.heading(f"Contador: {contador.count}", size=2),
        rx.hstack(
        rx.button("Incrementar", on_click=contador.incrementar),
        rx.button("Disminuir", on_click=contador.disminuir),
    ),
 )
@rx.page(route="/")
def index():
 return mi_componente()