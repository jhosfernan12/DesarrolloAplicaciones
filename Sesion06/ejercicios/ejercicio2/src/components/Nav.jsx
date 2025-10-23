import React from "react";
import hllogo from "../assets/hllogo_vhs_2.webm";

export default function Nav() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="top-nav">
      <div className="nav-logo">
        <video autoPlay loop muted playsInline>
          <source src={hllogo} type="video/webm" />
        </video>
      </div>
      <div className="nav-links">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          Inicio
        </a>
        <a href="#resistance" onClick={(e) => { e.preventDefault(); scrollToSection('resistance'); }}>
          Resistencia
        </a>
        <a href="#xen" onClick={(e) => { e.preventDefault(); scrollToSection('xen'); }}>
          Xen
        </a>
        <a href="#combine" onClick={(e) => { e.preventDefault(); scrollToSection('combine'); }}>
          Combine
        </a>
        <a href="#combine-wall" onClick={(e) => { e.preventDefault(); scrollToSection('combine-wall'); }}>
          Imperio
        </a>
      </div>
    </nav>
  );
}