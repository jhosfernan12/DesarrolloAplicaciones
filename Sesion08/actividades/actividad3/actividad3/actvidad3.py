import reflex as rx
import re
class EstadoFormulario(rx.State):
    nombre: str = ""
    correo: str = ""
    mensaje: str = ""
    def enviar_formulario(self):
        if not self.nombre or not self.correo or not self.mensaje:
            return rx.toast(
                title="Por favor completa todos los campos",
                style={"background_color": "#DC2626", "color": "white"},
            )


        if not re.match(r"[^@]+@[^@]+\.[^@]+", self.correo):
            return rx.toast(
                title="El correo electrónico no es válido",
                style={"background_color": "#F97316", "color": "white"},
            )


        return rx.toast(
            title="Formulario enviado correctamente",
            style={"background_color": "#16A34A", "color": "white"},
        )
    def limpiar_estado(self):
        self.nombre = ""
        self.correo = ""
        self.mensaje = ""
        return rx.toast(
            title="Campos limpiados",
            style={"background_color": "#4B5563", "color": "white"},
        )
def FormularioContacto() -> rx.Component:
    return rx.center(
        rx.box(
            rx.heading(
                "Formulario de Contacto",
                size="7",
                mb="5",
                color="pink",
                text_align="center",
            ),
            rx.input(
                placeholder="Nombre completo",
                value=EstadoFormulario.nombre,
                on_change=EstadoFormulario.set_nombre,
                width="100%",
                mb="3",
                border="1px solid #CBD5E1",
                color="white",
            ),
            rx.input(
                placeholder="Correo electrónico",
                value=EstadoFormulario.correo,
                on_change=EstadoFormulario.set_correo,
                width="100%",
                mb="3",
                border="1px solid #CBD5E1",
                color="white",
            ),
            rx.text_area(
                placeholder="Escribe tu mensaje aquí...",
                value=EstadoFormulario.mensaje,
                on_change=EstadoFormulario.set_mensaje,
                width="100%",
                height="120px",
                mb="5",
                border_radius="10px",
                border="1px solid #CBD5E1",
                color="white",
            ),
            rx.hstack(
                rx.button(
                    "Enviar",
                    color_scheme="green",
                    size="3",
                    border_radius="10px",
                    px="5",
                    _hover={"opacity": "0.85"},
                    on_click=EstadoFormulario.enviar_formulario,
                ),
                rx.button(
                    "Limpiar",
                    color_scheme="red",
                    size="3",
                    border_radius="10px",
                    px="5",
                    _hover={"opacity": "0.85"},
                    on_click=EstadoFormulario.limpiar_estado,
                ),
                justify="center",
                spacing="4",
            ),
            width="420px",
            padding="35px",
            border_radius="25px",
            box_shadow="0px 4px 20px rgba(0,0,0,0.1)",
            background_color="black",
            transition="all 0.3s ease-in-out",
            _hover={"box_shadow": "0px 6px 25px rgba(0,0,0,0.15)"},
        ),
        height="100vh",
        background_color="violet",
    )
def index() -> rx.Component:
    return FormularioContacto()
app = rx.App()
app.add_page(index, title="Formulario de Contacto")