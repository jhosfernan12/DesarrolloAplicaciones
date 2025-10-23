import Saludo from "./saludo";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Ejercicio con Componentes en React</h1>
      <p>Desarrollado por <strong>Belén Torres</strong></p>
      <Saludo nombre="María" />
      <Saludo nombre="Carlos" />
    </div>
  );
}

export default App;
