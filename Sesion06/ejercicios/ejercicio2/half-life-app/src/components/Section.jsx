import React from "react";

export default function Section({ id, title, subtitle, children, backgroundImg, backgroundVideo, dim = 0.5 }) {
  const bgStyle = backgroundImg ? { backgroundImage: `url(${backgroundImg})` } : {};
  return (
    <section id={id} className="section-wrap">
      {backgroundVideo && (
        <video className="section-bg-video" autoPlay loop muted playsInline style={{ opacity: dim }}>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}
      <div className="section-inner" style={bgStyle}>
        <header className="section-header">
          {title && <h2 className="section-title" data-text={title}>{title}</h2>}
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </header>
        <div className="section-children">{children}</div>
      </div>
    </section>
  );
}
