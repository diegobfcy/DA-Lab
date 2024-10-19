import reflex as rx

todas_las_tareas = [
    {"titulo": "Tarea 1", "estado": "Pendiente"},
    {"titulo": "Tarea 2", "estado": "En Progreso"},
    {"titulo": "Tarea 3", "estado": "Completada"},
    {"titulo": "Tarea 4", "estado": "Pendiente"},
    {"titulo": "Tarea 5", "estado": "En Progreso"},
]

tareas_en_progreso = [tarea for tarea in todas_las_tareas if tarea["estado"] == "En Progreso"]
tareas_completadas = [tarea for tarea in todas_las_tareas if tarea["estado"] == "Completada"]

def contar_tareas_por_estado(tareas):
    contadores = {}
    for tarea in tareas:
        estado = tarea["estado"]
        if estado in contadores:
            contadores[estado] += 1
        else:
            contadores[estado] = 1
    return contadores

def tarjeta_tarea(tarea):
    return rx.div(tarea["titulo"])

def columna_kanban(nombre, tareas):
    if State.mostrar_solo_pendientes:
        tareas = [t for t in tareas if t["estado"] == "Pendiente"]
    return rx.div(
        rx.heading(nombre),
        rx.div([tarjeta_tarea(tarea) for tarea in tareas])
    )

class State(rx.State):
    def __init__(self):
        super().__init__()
        self.mostrar_solo_pendientes = False

    def mostrar_pendientes(self):
        self.mostrar_solo_pendientes = True

def index():
    contadores = contar_tareas_por_estado(todas_las_tareas)
    return rx.div(
        rx.button("Mostrar Pendientes", on_click=State.mostrar_pendientes),
        columna_kanban("En Progreso", tareas_en_progreso),
        columna_kanban("Completadas", tareas_completadas),
        rx.div(f"Pendientes: {contadores.get('Pendiente', 0)}"),
        rx.div(f"En Progreso: {contadores.get('En Progreso', 0)}"),
        rx.div(f"Completadas: {contadores.get('Completada', 0)}")
    )
