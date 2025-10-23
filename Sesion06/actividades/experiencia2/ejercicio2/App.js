import "./App.css";

function App() {
  const nombre = "Belén Torres";
  const titulo = "Bienvenida a mi Página Informativa";
  const descripcion = "Esta página está diseñada para mostrar información personal y profesional de forma clara y visualmente atractiva. Utiliza React y JSX para organizar el contenido en secciones amplias con colores suaves y tipografía moderna.";

  const secciones = [
    { titulo: "Sobre mí", contenido: "Soy estudiante de Ingeniería de Sistemas, apasionada por el desarrollo web y React." },
    { titulo: "Hobbies", contenido: "Diseño web, programación, lectura y aprender nuevas tecnologías." },
    { titulo: "Objetivos", contenido: "Desarrollar aplicaciones modernas, aprender nuevas herramientas y mejorar continuamente mis habilidades." }
  ];

  return (
    <div className="container-rosado">
      {/* Encabezado */}
      <header className="header">
        <h1>{titulo}</h1>
      </header>

      {/* Descripción */}
      <section className="descripcion">
        <p>{descripcion}</p>
      </section>

      {/* Secciones en fila horizontal */}
      <main className="main-horizontal">
        {secciones.map((sec, i) => (
          <section className="info-column" key={i}>
            <h2>{sec.titulo}</h2>
            <p>{sec.contenido}</p>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Desarrollado por {nombre} | React y JSX </p>
      </footer>
    </div>
  );
}

export default App;
