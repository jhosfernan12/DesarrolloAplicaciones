import React from "react";

export default function CharacterCard({ character, onOpen }) {
  const isVideo = character.asset.endsWith(".webm") || character.asset.endsWith(".mp4");

  return (
    <div className="character-card" onClick={() => onOpen(character)}>
      <div className="card-media">
        {isVideo ? (
          <video src={character.asset} autoPlay loop muted playsInline />
        ) : (
          <img src={character.asset} alt={character.name} />
        )}
      </div>
      <div className="card-info">
        <h3>{character.name}</h3>
        <span>{character.game}</span>
      </div>
    </div>
  );
}