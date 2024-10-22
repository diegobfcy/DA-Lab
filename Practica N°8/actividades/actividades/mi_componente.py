import reflex as rx
def mi_componente():
    return rx.hstack(
        rx.Heading("Este es un encabezado H1", size=1),
        rx.Heading("Este es un encabezado H3", size=3),
        rx.Button("Botón 1"),
        rx.Button("Botón 2"),
        rx.Button("Botón 3"),
        rx.Button("Haz clic aquí", color_scheme="blue", onclick=lambda: print("¡Botón presionado!")) 
    )