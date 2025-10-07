import React from "react";

export default function CharacterCard({ character }) {
  const isVideo = character.asset.endsWith(".webm") || character.asset.endsWith(".mp4");

  return (
    <div className="char-card" role="button">
      <div className="char-media">
        {isVideo ? (
          <video src={character.asset} autoPlay loop muted playsInline />
        ) : (
          <img src={character.asset} alt={character.name} />
        )}
      </div>
      <div className="char-meta">
        <h3>{character.name}</h3>
        <span>{character.game}</span>
      </div>
    </div>
  );
}
