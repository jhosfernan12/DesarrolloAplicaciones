import React from "react";
import Section from "./Section";
import CharacterCard from "./CharacterCard";
import FormCombine from "./FormCombine";

import combineVideo from "../assets/combinereclutamiento.mp4";
import generalBg from "../assets/fondo.jpg";
import gordon from "../assets/gordon-bg.png";
import alyx from "../assets/scientist.png";
import zombie from "../assets/zombie.png";
import zombine from "../assets/zombine.webm";
import advisor from "../assets/advisor.webm";
import antlion from "../assets/antlion.webm";

const characters = [
  { name: "Gordon Freeman", game: "Half-Life 1", asset: gordon },
  { name: "Alyx Vance", game: "Half-Life 2", asset: alyx },
  { name: "Zombie", game: "Half-Life 2", asset: zombie },
  { name: "Zombine", game: "Half-Life 2", asset: zombine },
  { name: "Advisor", game: "Half-Life 2", asset: advisor },
  { name: "Antlion", game: "Half-Life 2", asset: antlion }
];

const Home = () => (
  <>
    <Section title="Héroes del Half-Life" backgroundImg={generalBg}>
      {characters.slice(0, 2).map((char, i) => <CharacterCard key={i} character={char} asset={char.asset} />)}
    </Section>

    <Section title="Combine & Reclutamiento" backgroundVideo={combineVideo}>
      {characters.slice(2).map((char, i) => <CharacterCard key={i} character={char} asset={char.asset} />)}
      <FormCombine />
    </Section>
  </>
);

export default Home;
