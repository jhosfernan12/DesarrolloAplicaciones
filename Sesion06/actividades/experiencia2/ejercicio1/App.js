import "./App.css";

function App() {
  const nombre = "Belén Torres";
  const carrera = "Ingeniería de Sistemas";
  const universidad = "Universidad Católica de Santa María";
  const email = "belen.torres@email.com";
  const telefono = "(+51) 987654321";
  const github = "github.com/belen-torres";
  const linkedin = "linkedin.com/in/belen-torres";

  return (
    <div className="container">
      {/* Encabezado */}
      <header className="header">
        <img src="/logo192.png" alt="Logo React" className="logo" />
        <h1>Mi Perfil Profesional</h1>
      </header>

      {/* Sección Información Personal */}
      <section className="section personal">
        <h2>Información Personal</h2>
        <div className="info-grid">
          <div>
            <p><strong>Nombre:</strong> {nombre}</p>
            <p><strong>Carrera:</strong> {carrera}</p>
            <p><strong>Universidad:</strong> {universidad}</p>
          </div>
          <div className="profile-img">
            <img src="/logo192.png" alt="Foto de Perfil" />
          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section className="section contacto">
        <h2>Contacto</h2>
        <div className="contact-grid">
          <div>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Teléfono:</strong> {telefono}</p>
          </div>
          <div>
            <p><strong>GitHub:</strong> {github}</p>
            <p><strong>LinkedIn:</strong> {linkedin}</p>
          </div>
        </div>
        <button className="btn-contact">Enviar Mensaje</button>
      </section>

      {/* Pie de página */}
      <footer className="footer">
        <p>Diseñado con React y JSX | Belen Torres </p>
      </footer>
    </div>
  );
}

export default App;
