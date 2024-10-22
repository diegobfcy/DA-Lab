import reflex as rx
from typing import List

class State(rx.State):
    tarea_completada: list = [
        "tarea1",
        "tarea2",
        "tarea3",
        "tarea4",
        "tarea5",
        "tarea6",
    ]
    tarea_pendiente: list = [
        "tarea1",
        "tarea2",
        "tarea3",
        "tarea4",
        "tarea5",
        "tarea6",
    ]

    mostrar_solo_pendientes = False
    def mostrar_pendientes(self):
        self.mostrar_solo_pendientes = True



