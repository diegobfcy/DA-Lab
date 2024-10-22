
import reflex as rx

from ejercicio1.state import State
from ejercicio1.state import *


def index() -> rx.Component:
    return rx.container(
    rx.button("Mostrar Pendientes", on_click=State.mostrar_pendientes),
    rx.foreach(State.tarea_pendiente, lambda tarea_pendiente: rx.list_item(tarea_pendiente) ),
    rx.foreach(State.tarea_completada, lambda tarea_completada: rx.list_item(tarea_completada) )
    )
app = rx.App()
app.add_page(index)
