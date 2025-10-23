import React from "react";

export default function Section({ id, title, subtitle, backgroundVideo, children }) {
  return (
    <section id={id} className="section-container">
      {backgroundVideo && (
        <video className="section-bg-video" autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/webm" />
        </video>
      )}
      <div className="section-content">
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}