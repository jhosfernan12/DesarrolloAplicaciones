import React from "react";

export default function Nav() {
  return (
    <nav className="top-nav">
      <a href="#home" className="nav-logo">HALF-LIFE</a>
      <div className="nav-links">
        <a href="#characters">Personajes</a>
        <a href="#recruit">Reclutamiento</a>
        <a href="#lore">Historia</a>
      </div>
    </nav>
  );
}
