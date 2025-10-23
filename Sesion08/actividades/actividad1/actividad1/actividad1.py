
import reflex as rx
from rxconfig import config

class State(rx.State):
    """Estado del contador."""
    conteo: int = 0

    def incrementar(self):
        self.conteo += 1

    def disminuir(self):
        self.conteo -= 1


def contador() -> rx.Component:
    return rx.hstack(
        rx.button("Incrementar", on_click=State.incrementar, color_scheme="purple"),
        rx.text(State.conteo, size="6", padding="2", color="purple"),
        rx.button("Disminuir", on_click=State.disminuir, color_scheme="purple"),
        spacing="4",
        align_items="center"
    )



def index() -> rx.Component:
    return rx.center(
        contador(),
        height="100vh"
    )

app = rx.App()
app.add_page(index)


if __name__ == "__main__":
    rx.run(app, State)
