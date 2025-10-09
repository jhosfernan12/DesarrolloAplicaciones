import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import Modal from "./Modal";
import FormCombine from "./FormCombine";

// Assets
import videoEntrada from "../assets/videoentrada.webm";
import hllogo from "../assets/hllogo_vhs_2.webm";

// Assets para secciones
import combineWall from "../assets/combine-wall.png";
import combineVideo from "../assets/combine.webm";
import combineReclutamiento from "../assets/combinereclutamiento.mp4";
import resistanceBg from "../assets/resistance-bg.gif";
import xenBg from "../assets/xen-bg.gif";

// Personajes
import gordon from "../assets/gordonfreeman.png";
import alyx from "../assets/alyx.png";
import barney from "../assets/barney.png";
import eli from "../assets/eli.png";
import zombie from "../assets/zombie.png";
import headcrab from "../assets/headcrab.png";
import vortigaunt from "../assets/vortigaunt.png";
import antlion from "../assets/antlion.webm";
import zombine from "../assets/zombine.webm";
import advisor from "../assets/advisor.webm";
import combineSoldier from "../assets/combine.webm";
import strider from "../assets/strider.gif";
import raptor from "../assets/raptor.png";
import crabsyhtn from "../assets/crabsyhtn.gif";
import cremator from "../assets/cremator.gif";

// Organizar personajes por nuevas secciones
const resistanceCharacters = [
  { name: "Gordon Freeman", game: "Half-Life Series", asset: gordon, description: "Físico teórico convertido en héroe silencioso. Protagonista de la resistencia humana." },
  { name: "Alyx Vance", game: "Half-Life 2", asset: alyx, description: "Experta en tecnología y hackeo, aliada clave en la resistencia contra el Combine." },
  { name: "Barney Calhoun", game: "Half-Life 2", asset: barney, description: "Ex guardia de seguridad de Black Mesa, ahora oficial bajocover en la resistencia." },
  { name: "Eli Vance", game: "Half-Life 2", asset: eli, description: "Científico líder de la resistencia y padre de Alyx. Experto en teletransporte." }
];

const xenCharacters = [
  { name: "Headcrab", game: "Half-Life Series", asset: headcrab, description: "Parásito alienígena que se adhiere a huéspedes humanos, creando zombies." },
  { name: "Zombie", game: "Half-Life Series", asset: zombie, description: "Seres humanos infectados por parásitos Headcrab. Hostiles pero con memoria residual." },
  { name: "Vortigaunt", game: "Half-Life Series", asset: vortigaunt, description: "Especie alienígena esclavizada, luego aliada de la resistencia humana." },
  { name: "Antlion", game: "Half-Life 2", asset: antlion, description: "Criaturas insectoides territoriales que habitan en las arenas fuera de City 17." }
];

const combineCharacters = [
  { name: "Soldado Combine", game: "Half-Life 2", asset: combineSoldier, description: "Fuerzas de asalto transhumanas del Imperio Universal Combine." },
  { name: "Zombine", game: "Half-Life 2", asset: zombine, description: "Soldados Combine infectados que conservan equipo táctico. Extremadamente peligrosos." },
  { name: "Advisor", game: "Half-Life 2", asset: advisor, description: "Entidades psiónicas de la élite Combine. Supervisan operaciones con habilidades telepáticas." },
  { name: "Strider", game: "Half-Life 2", asset: strider, description: "Máquinas de guerra gigantes del Combine, equipadas con cañones y habilidades de combate avanzadas." },
  { name: "Raptor", game: "Half-Life 2", asset: raptor, description: "Depredadores veloces y letales, cazan en manadas y son extremadamente ágiles." },
  { name: "Crab Synth", game: "Half-Life 2", asset: crabsyhtn, description: "Unidades de combate sintéticas que combinan tecnología de cangrejo con armamento avanzado." },
  { name: "Cremator", game: "Half-Life 2", asset: cremator, description: "Unidades de limpieza biológica que incineran amenazas orgánicas con fuego intenso." }
];

export default function Home() {
  const [selected, setSelected] = useState(null);

  const openModal = (character) => {
    setSelected(character);
  };

  const closeModal = () => {
    setSelected(null);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <video className="hero-bg-video" autoPlay loop muted playsInline>
          <source src={videoEntrada} type="video/webm" />
        </video>
        <div className="hero-content">
          <video className="hero-logo" autoPlay loop muted playsInline>
            <source src={hllogo} type="video/webm" />
          </video>
          <p className="hero-description">Archivo completo del universo Half-Life. Explora facciones, criaturas y tecnología.</p>
          <button 
            className="cta-button" 
            onClick={() => document.getElementById('resistance').scrollIntoView({ behavior: 'smooth' })}
          >
            Explorar Universo
          </button>
        </div>
      </section>

      {/* Resistencia Section - USANDO resistanceBg GIF */}
      <section id="resistance" className="resistance-section">
        <div 
          className="section-bg" 
          style={{ backgroundImage: `url(${resistanceBg})` }}
        ></div>
        <div className="section-content">
          <h2>Resistencia</h2>
          <p className="section-subtitle">La lucha humana por la libertad</p>
          <div className="cards-grid">
            {resistanceCharacters.map((char, i) => (
              <CharacterCard key={i} character={char} onOpen={openModal} />
            ))}
          </div>
        </div>
      </section>

      {/* Xen Section - USANDO xenBg GIF */}
      <section id="xen" className="xen-section">
        <div 
          className="section-bg" 
          style={{ backgroundImage: `url(${xenBg})` }}
        ></div>
        <div className="section-content">
          <h2>Xen</h2>
          <p className="section-subtitle">Flora y fauna alienígena</p>
          <div className="cards-grid">
            {xenCharacters.map((char, i) => (
              <CharacterCard key={i} character={char} onOpen={openModal} />
            ))}
          </div>
        </div>
      </section>

      {/* Combine Section - CON VIDEO DE FONDO */}
      <section id="combine" className="combine-section">
        <video className="section-bg" autoPlay loop muted playsInline>
          <source src={combineReclutamiento} type="video/mp4" />
        </video>
        <div className="section-content">
          <h2>Combine</h2>
          <p className="section-subtitle">Orden mediante supresión universal</p>
          
          <div className="cards-grid">
            {combineCharacters.map((char, i) => (
              <CharacterCard key={i} character={char} onOpen={openModal} />
            ))}
          </div>
          
          <div className="recruit-section">
            <button 
              className="combine-button" 
              onClick={() => openModal({ 
                name: "Iniciación Combine", 
                game: "Sistema de Reclutamiento", 
                asset: combineVideo,
                description: "Proceso de evaluación para candidatos a asimilación Combine. Complete el formulario para análisis preliminar.", 
                form: true 
              })}
            >
              Solicitar Evaluación
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <Modal onClose={closeModal} title={selected.name}>
          <div className="modal-content-wrapper">
            {selected.asset && !selected.form ? (
              selected.asset.endsWith(".webm") || selected.asset.endsWith(".mp4") ? (
                <video src={selected.asset} autoPlay loop muted playsInline className="modal-media" />
              ) : (
                <img src={selected.asset} alt={selected.name} className="modal-media" />
              )
            ) : selected.asset && selected.form ? (
              <video src={selected.asset} autoPlay loop muted playsInline className="modal-media" />
            ) : null}

            <div className="modal-info-content">
              <h3>{selected.name}</h3>
              <p className="game-info">{selected.game}</p>
              <p className="character-description">
                {selected.description}
              </p>

              {selected.form ? (
                <FormCombine />
              ) : (
                <div className="modal-actions">
                  <button className="action-button" onClick={() => alert("Reproduciendo audio ambiental...")}>
                    Audio de Entorno
                  </button>
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}