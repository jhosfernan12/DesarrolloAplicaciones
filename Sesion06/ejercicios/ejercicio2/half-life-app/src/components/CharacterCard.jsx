import React from "react";

export default function CharacterCard({ character, onOpen }) {
  const asset = character.asset || "";
  const isVideo = asset.endsWith(".webm") || asset.endsWith(".mp4");
  return (
    <div className="char-card" onClick={() => onOpen(character)} role="button" tabIndex={0}>
      <div className="char-media">
        {isVideo ? (
          <video src={asset} autoPlay loop muted playsInline className="char-media-vid" />
        ) : (
          <img src={asset} alt={character.name} className="char-media-img" />
        )}
      </div>
      <div className="char-meta">
        <h4>{character.name}</h4>
        <span className="char-game">{character.game}</span>
      </div>
    </div>
  );
}
