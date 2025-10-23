import reflex as rx


class State(rx.State):
    mostrar_solo_pendientes: bool = False


    def toggle_pendientes(self):
        self.mostrar_solo_pendientes = not self.mostrar_solo_pendientes


tareas_en_progreso = [
    {"titulo": "Tarea 1", "estado": "Pendiente"},
    {"titulo": "Tarea 5", "estado": "Pendiente"},
    {"titulo": "Tarea 3", "estado": "Pendiente"},
]


tareas_completadas = [
    {"titulo": "Tarea 4", "estado": "Completada"},
    {"titulo": "Tarea 2", "estado": "Completada"},
]




def tarjeta_tarea(tarea: dict) -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading(tarea["titulo"], size="5", color="white"),
            rx.text(f"Estado: {tarea['estado']}", size="2", color="white"),
            spacing="1",
            align_items="start"
        ),
        padding="3",
        border_radius="md",
        bg=rx.cond(
            tarea["estado"] == "Pendiente",
            "purple.600",
            "purple.900"  
        ),
        box_shadow="lg",
        margin_bottom="3",
        width="100%",
        min_height="80px",
        display="flex",
        align_items="center"
    )


def columna_kanban(nombre: str, tareas: list) -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.box(
                rx.heading(nombre, size="4", color="white"),
                padding="3",
                bg="purple.800",
                border_radius="md",
                text_align="center",
                width="100%"
            ),
            rx.box(
                rx.vstack(
                    rx.foreach(
                        tareas,
                        lambda tarea: rx.cond(
                            State.mostrar_solo_pendientes,
                            rx.cond(tarea["estado"] == "Pendiente", tarjeta_tarea(tarea), None),
                            tarjeta_tarea(tarea)
                        )
                    ),
                    spacing="3",
                    width="100%",
                    min_height="400px"
                ),
                padding="3",
                bg="gray.900",
                border_radius="md",
                width="100%",
                height="100%"
            ),
            spacing="3",
            width="100%",
            height="100%"
        ),
        padding="3",
        border_radius="xl",
        bg="black",
        border="2px solid purple",
        width="320px",
        min_height="500px",
        box_shadow="xl"
    )




def index() -> rx.Component:
    return rx.vstack(
        rx.box(
            rx.hstack(
                rx.heading("Tablero Kanban", size="6", color="purple.400"),
                rx.button(
                    rx.cond(
                        State.mostrar_solo_pendientes,
                        "Mostrar Todas las Tareas",
                        "Mostrar Solo Pendientes"
                    ),
                    on_click=State.toggle_pendientes,
                    color_scheme="purple",
                    size="2",
                    variant="solid"
                ),
                justify="between",
                align="center",
                width="100%"
            ),
            padding="4",
            bg="black",
            border_bottom="2px solid purple",
            width="100%"
        ),
       
        rx.center(
            rx.hstack(
                columna_kanban("En Progreso", tareas_en_progreso),
                columna_kanban("Completadas", tareas_completadas),
                spacing="6",
                align_items="flex-start",
                justify="center"
            ),
            width="100%",
            padding="6"
        ),
        spacing="0",
        width="100%",
        min_height="100vh",
        bg="black"
    )


app = rx.App()
app.add_page(index)


if __name__ == "__main__":
    app.compile()