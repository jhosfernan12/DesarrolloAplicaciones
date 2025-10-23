import reflex as rx
import httpx


# estado para manejar llamada y UI
class EstadoAPI(rx.State):
    items: list[dict] = []
    loading: bool = False
    error: str = ""


    async def cargar(self):
        self.loading = True
        self.error = ""
        try:
            url = "https://jsonplaceholder.typicode.com/posts?_limit=5"
            async with httpx.AsyncClient(timeout=10) as client:
                res = await client.get(url)
                res.raise_for_status()
                data = res.json()
                self.items = [{"id": d["id"], "title": d["title"]} for d in data]
        except Exception as e:
            self.error = str(e)
        finally:
            self.loading = False




def item_li(it: dict) -> rx.Component:
    return rx.el.li(f'{it["id"]}. {it["title"]}')




def api_page() -> rx.Component:
    return rx.center(
        rx.vstack(
            rx.heading("Consumo de API externa"),
            rx.text("Fuente: jsonplaceholder.typicode.com/posts?_limit=5", size="2"),
            rx.hstack(
                rx.button("Cargar datos", on_click=EstadoAPI.cargar),
                rx.text(rx.cond(EstadoAPI.loading, "cargando...", "listo")),
                spacing="3",
            ),
            rx.cond(
                EstadoAPI.error != "",
                rx.box(
                    rx.text("Error al cargar:", weight="bold"),
                    rx.code(EstadoAPI.error),
                    padding="8px",
                    border="1px solid #ef4444",
                    border_radius="8px",
                    bg="#fee2e2",
                ),
                rx.el.ul(
                    rx.foreach(EstadoAPI.items, item_li)
                ),
            ),
            spacing="4",
        ),
        min_h="100vh",
    )