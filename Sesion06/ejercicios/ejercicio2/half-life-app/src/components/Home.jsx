import React, { useState } from "react";
import Section from "./Section";
import CharacterCard from "./CharacterCard";
import Modal from "./Modal";
import FormCombine from "./FormCombine";

// assets
import videoEntrada from "../assets/videoentrada.webm";
import combineVideo from "../assets/combine.webm";
import combineBg from "../assets/combine-wall.png";
import h1Gameplay from "../assets/h1_gameplay.webm";
import h2Gameplay from "../assets/h2_gameplay.webm";

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
      {/* Home / Entrada */}
      <section id="home" className="hero-wrap">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={videoEntrada} type="video/webm" />
        </video>
        <div className="hero-overlay">
          <h1 className="glitch" data-text="HALF-LIFE UNIVERSE">HALF-LIFE UNIVERSE</h1>
          <p className="hero-sub">Una experiencia interactiva al mundo Combine, Gordon y Alyx.</p>
          <a href="#characters" className="button">Explorar personajes</a>
        </div>
      </section>

      {/* Half-Life 1 Gameplay */}
      <Section id="hl1" title="Half-Life 1" subtitle="Revive los momentos icónicos" backgroundVideo={h1Gameplay} dim={0.5}>
        <div className="grid-cards">
          {characters.slice(0,2).map((char,i) => (
            <CharacterCard key={i} character={char} onOpen={openModal} />
          ))}
        </div>
      </Section>

      {/* Half-Life 2 Gameplay */}
      <Section id="hl2" title="Half-Life 2" subtitle="City 17 y el Combine" backgroundVideo={h2Gameplay} dim={0.45}>
        <div className="grid-cards">
          {characters.slice(1).map((char,i) => (
            <CharacterCard key={i} character={char} onOpen={openModal} />
          ))}
        </div>
      </Section>

      {/* Combine / Reclutamiento */}
      <Section id="recruit" title="Combine & Reclutamiento" subtitle="Oscuros, ordenados, inevitables" backgroundImg={combineBg} dim={0.6}>
        <div className="grid-cards">
          {characters.slice(2).map((char,i) => (
            <CharacterCard key={i} character={char} onOpen={openModal} />
          ))}
        </div>
        <div className="recruit-cta">
          <button className="button" onClick={() => openModal({ name: "Formulario de Reclutamiento", game: "Combine", asset: "", description: "", form: true })}>
            Rellenar ficha de reclutamiento
          </button>
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
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
