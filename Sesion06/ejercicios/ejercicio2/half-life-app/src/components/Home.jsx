import React, { useState } from "react";
import Section from "./Section";
import CharacterCard from "./CharacterCard";
import Modal from "./Modal";
import FormCombine from "./FormCombine";

// assets
import combineVideo from "../assets/combinereclutamiento.mp4";
import generalBg from "../assets/fondo.jpg";
import gordon from "../assets/gordon-bg.png";
import alyx from "../assets/scientist.png";
import zombie from "../assets/zombie.png";
import zombine from "../assets/zombine.webm";
import advisor from "../assets/advisor.webm";
import antlion from "../assets/antlion.webm";
import hllogo from "../assets/hllogo_vhs_2.webm";

const characters = [
  { name: "Gordon Freeman", game: "Half-Life 1", asset: gordon, description: "Científico convertido en héroe silencioso." },
  { name: "Alyx Vance", game: "Half-Life 2", asset: alyx, description: "Aliada clave y experta en hackeo." },
  { name: "Zombie", game: "Half-Life 2", asset: zombie, description: "Víctimas del Headcrab." },
  { name: "Zombine", game: "Half-Life 2", asset: zombine, description: "Soldado convertido y peligroso." },
  { name: "Advisor", game: "Half-Life 2", asset: advisor, description: "Entidad de la élite Combine." },
  { name: "Antlion", game: "Half-Life 2", asset: antlion, description: "Criatura territorial del desierto." }
];

export default function Home() {
  const [selected, setSelected] = useState(null);

  function openModal(character) {
    setSelected(character);
  }
  function closeModal() {
    setSelected(null);
  }

  return (
    <>
      {/* Hero */}
      <section id="home" className="hero-wrap">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={hllogo} type="video/webm" />
        </video>
        <div className="hero-overlay">
          <h1 className="glitch" data-text="HALF-LIFE UNIVERSE">HALF-LIFE UNIVERSE</h1>
          <p className="hero-sub">Un homenaje interactivo al mundo Combine, Gordon y Alyx.</p>
          <a href="#characters" className="button">Explorar personajes</a>
        </div>
      </section>

      {/* Characters Section */}
      <Section id="characters" title="Personajes" subtitle="Explora caras y criaturas icónicas" backgroundImg={generalBg} dim={0.35}>
        <div className="grid-cards">
          {characters.map((char, i) => (
            <CharacterCard key={i} character={char} onOpen={openModal} />
          ))}
        </div>
      </Section>

      {/* Combine Section */}
      <Section id="recruit" title="Combine & Reclutamiento" subtitle="Oscuros, ordenados, inevitables" backgroundVideo={combineVideo} dim={0.5}>
        <div className="grid-cards">
          {characters.slice(2).map((char, i) => (
            <CharacterCard key={i} character={char} onOpen={openModal} />
          ))}
        </div>
        <div className="recruit-cta">
          <button className="button" onClick={() => openModal({ name: "Formulario de Reclutamiento", game: "Combine", asset: "", description: "", form: true })}>
            Rellenar ficha de reclutamiento
          </button>
        </div>
      </Section>

      {/* Lore / About Section */}
      <Section id="lore" title="Historia" subtitle="Una breve carta de amor al universo">
        <div className="lore-card">
          <p>
            Desde Black Mesa hasta City 17, el universo Half-Life combina tensión, ciencia y un diseño de mundos que perdura.
            Este homenaje busca capturar la atmósfera: sonidos metálicos, cielos grises y la sensación de estar siempre observado.
          </p>
        </div>
      </Section>

      {/* Modal */}
      {selected && (
        <Modal onClose={closeModal} title={selected.name}>
          <div className="modal-detail">
            {selected.asset ? (
              (selected.asset.endsWith(".webm") || selected.asset.endsWith(".mp4")) ? (
                <video src={selected.asset} autoPlay loop muted playsInline className="modal-media" />
              ) : (
                <img src={selected.asset} alt={selected.name} className="modal-media" />
              )
            ) : null}

            <div className="modal-info">
              <h4>{selected.name}</h4>
              <p className="muted">{selected.game}</p>
              <p>{selected.description || "Información complementaria no disponible."}</p>

              {selected.form ? (
                <FormCombine />
              ) : (
                <div className="modal-actions">
                  <button className="button" onClick={() => alert("Reproduciendo audio ambiental... (simulado)")}>Play ambient</button>
                  <button className="button" onClick={() => alert("Abrir ficha extendida... (simulado)")}>Ficha completa</button>
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
