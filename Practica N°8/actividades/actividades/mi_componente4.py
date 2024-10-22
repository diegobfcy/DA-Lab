import reflex as rx
from .styles import sombra_suave, margen_mediano, borde_redondeado

def mi_componente():
    return rx.box(
    "¡Hola, mundo!",
    style={
    "padding": "10px",
    "background-color": "lightblue",
    **sombra_suave,
    **margen_mediano,
    **borde_redondeado,
    }
)