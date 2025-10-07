import React from "react";

const CharacterCard = ({ character, asset }) => {
  const isVideo = asset.endsWith(".webm") || asset.endsWith(".mp4");
  return (
    <div className="card">
      {isVideo ? <video src={asset} autoPlay loop muted /> : <img src={asset} alt={character.name} />}
      <h3>{character.name}</h3>
      <p>{character.game}</p>
    </div>
  );
};

export default CharacterCard;
