import reflex as rx
class EstadoContador(rx.State):
    conteo: int = 0
    def incrementar(self): self.conteo += 1
    def disminuir(self): self.conteo -= 1


def index() -> rx.Component:
    return rx.center(
        rx.box(
            rx.vstack(
                rx.heading("contador simple", size="6"),
                rx.text(EstadoContador.conteo, font_size="64px", weight="bold"),
                rx.hstack(
                    rx.button("incrementar", on_click=EstadoContador.incrementar, size="3"),
                  rx.button("disminuir", on_click=EstadoContador.disminuir, variant="soft", size="3"),
                    spacing="4",
                ),
                spacing="5",
                align="center",
            ),
            padding="32px",
            width="min(480px, 90vw)",
            bg="#111418",
            border="1px solid #2a2a2a",
            border_radius="24px",
            box_shadow="0 10px 30px rgba(0,0,0,.35)",
        ),
        min_h="100vh",
    )
app = rx.App()
app.add_page(index, route="/", title="experiencia 1 - contador")
from .api_demo import api_page
app.add_page(api_page, route="/exp4", title="experiencia 4 - api")