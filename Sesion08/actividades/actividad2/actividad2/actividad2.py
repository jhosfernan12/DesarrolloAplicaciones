import reflex as rx

class EstadoTareas(rx.State):
    tareas: list[str] = ["Tarea 1", "Tarea 2"]
    nueva_tarea: str = ""


    def set_nueva_tarea(self, valor: str):
        self.nueva_tarea = valor


    def agregar_tarea(self):
        if self.nueva_tarea.strip():
            self.tareas = self.tareas + [self.nueva_tarea]
            self.nueva_tarea = ""


def ListaTareas():
    return rx.box(
        rx.heading("Lista de Tareas", size="3"),  # tamaños válidos: '1'-'9'
        rx.foreach(
            EstadoTareas.tareas,
            lambda tarea: rx.text(tarea)
        ),
        display="flex",
        flex_direction="column",
        align_items="center",
    )

def AgregarTarea():
    return rx.box(
        rx.input(
            value=EstadoTareas.nueva_tarea,
            placeholder="Escribe una tarea...",
            on_change=EstadoTareas.set_nueva_tarea,
        ),
        rx.button("Agregar", on_click=EstadoTareas.agregar_tarea),
        display="flex",
        flex_direction="column",
        align_items="center",
        margin_top="2",
    )


def index():
    return rx.box(
        ListaTareas(),
        AgregarTarea(),
        display="flex",
        flex_direction="column",
        align_items="center",
        justify_content="center",
        height="100vh",
    )


app = rx.App(_state=EstadoTareas)
app.add_page(index)