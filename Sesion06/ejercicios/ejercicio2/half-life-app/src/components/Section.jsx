import React from "react";

const Section = ({ title, children, backgroundImg, backgroundVideo }) => {
  return (
    <div className="section">
      {backgroundImg && <img className="section-bg" src={backgroundImg} alt="fondo" />}
      {backgroundVideo && <video className="section-video" autoPlay loop muted src={backgroundVideo} />}
      <h2>{title}</h2>
      <div className="section-content">{children}</div>
    </div>
  );
};

export default Section;
