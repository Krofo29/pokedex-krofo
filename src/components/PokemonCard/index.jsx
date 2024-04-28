import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const PokemonCard = ({ urlInfo }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await fetch(urlInfo);
      const result = await response.json();
      setPokemonInfo(result);
    };

    if (urlInfo) {
      fetchPokemonData();
    }
  }, [urlInfo]);

  if (!pokemonInfo) return null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>{pokemonInfo.name}</h1>
      <img
        src={pokemonInfo?.sprites?.other?.dream_world?.front_default}
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
};

export default PokemonCard;
