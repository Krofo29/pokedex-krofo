import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=50"
        );
        const { results } = await response.json();
        setIsLoading(false);
        setPokemons(results);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchPokemons();
  }, []);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <h1>Cargando datos desde la pokedex...</h1>
      </>
    );
  }

  if (!pokemons.length) {
    return (
      <>
        <Navbar />
        <h1>No se encontraron Pokemons</h1>;
      </>
    );
  }

  return (
    <>
      <Navbar />
      {pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.name} urlInfo={pokemon.url} />;
      })}
    </>
  );
}

export default App;
