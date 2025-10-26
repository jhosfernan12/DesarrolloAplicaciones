import reflex as rx

class EstadoKanban(rx.State):
    tareas = [
        {"nombre": "Tarea 1", "estado": "Pendiente"},
        {"nombre": "Tarea 2", "estado": "En Progreso"},
        {"nombre": "Tarea 3", "estado": "Completada"},
    ]


    pendientes: int = 0
    en_progreso: int = 0
    completadas: int = 0


    def actualizar_contadores(self):
        """Actualizar contadores según el estado de las tareas"""
        self.pendientes = sum(1 for t in self.tareas if t["estado"] == "Pendiente")
        self.en_progreso = sum(1 for t in self.tareas if t["estado"] == "En Progreso")
        self.completadas = sum(1 for t in self.tareas if t["estado"] == "Completada")



def Contadores():
    return rx.box(
        rx.box(
            rx.text(f"Pendiente: {EstadoKanban.pendientes}", color="white", font_size="20px"),
            padding="4",
            bg="purple.600",
            border_radius="md",
            width="220px",
            text_align="center"
        ),
        rx.box(
            rx.text(f"En Progreso: {EstadoKanban.en_progreso}", color="white", font_size="20px"),
            padding="4",
            bg="yellow.500",
            border_radius="md",
            width="220px",
            text_align="center"
        ),
        rx.box(
            rx.text(f"Completada: {EstadoKanban.completadas}", color="white", font_size="20px"),
            padding="4",
            bg="green.500",
            border_radius="md",
            width="220px",
            text_align="center"
        ),
        display="flex",
        flex_direction="column",
        align_items="center",
        gap="4"
    )


def index():
    EstadoKanban.actualizar_contadores()  
    return rx.box(
        rx.heading("Contador de Tareas por Estado", color="white", margin_bottom="6", font_size="28px"),
        Contadores(),
        display="flex",
        flex_direction="column",
        align_items="center",
        justify_content="center",
        height="100vh",
        bg="gray.900"
    )


app = rx.App(_state=EstadoKanban)
app.add_page(index)


if __name__ == "__main__":
    app.compile()