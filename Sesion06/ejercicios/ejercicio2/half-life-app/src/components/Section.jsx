import React from "react";

export default function Section({ title, backgroundImg, backgroundVideo, children, dim = 0.5 }) {
  const bgStyle = backgroundImg ? { backgroundImage: `url(${backgroundImg})` } : {};

  return (
    <section className="section-wrap" style={bgStyle}>
      {backgroundVideo && (
        <video className="section-bg-video" autoPlay loop muted playsInline style={{ opacity: dim }}>
          <source src={backgroundVideo} type="video/webm" />
        </video>
      )}
      <div className="section-content">
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
