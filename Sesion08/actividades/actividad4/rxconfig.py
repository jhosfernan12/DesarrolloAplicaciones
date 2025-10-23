import reflex as rx

config = rx.Config(
    app_name="actividad1",
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ]
)