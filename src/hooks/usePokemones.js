import React, { useState, useEffect } from "react";
const URL_DEFAULT = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
const URL_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";

function usePokemones() {
  const [pokemones, setPokemones] = useState([]);
  const [siguienteUrl, setSiguienteUrl] = useState("");
  const [verMas, setVerMas] = useState(true);
  const [pokemonesFiltrados, setPokemonesFiltrados] = useState([]);

  const fetchPokemon = async (url) => {
    const response = await fetch(url);
    const poke = await response.json();
    const abilities = poke.abilities.map((a) => a.ability.name);
    const stats = poke.stats.map((s) => {
      return { name: s.stat.name, base: s.base_stat };
    });
    const types = poke.types.map((t) => t.type.name);

    return {
      id: poke.id,
      nombre: poke.name,
      imagen:
        poke.sprites.other.dream_world.front_default ||
        poke.sprites.front_default,
      abilities,
      stats,
      types,
    };
  };

  const getPokemones = async (url = URL_DEFAULT) => {
    const response = await fetch(url);
    const listaPokemones = await response.json();
    const { next, results } = listaPokemones;

    const newPokemones = await Promise.all(
      results.map(async (pokemon) => {
        const pokeData = await fetchPokemon(`${URL_ENDPOINT}${pokemon.name}`);
        return pokeData;
      })
    );

    return { next, newPokemones };
  };

  const obtenerPokemones = async () => {
    const { next, newPokemones } = await getPokemones();
    setPokemones(newPokemones);
    setPokemonesFiltrados(newPokemones);
    setSiguienteUrl(next);
  };

  const masPokemones = async () => {
    const { next, newPokemones } = await getPokemones(siguienteUrl);
    setPokemones((prev) => [...prev, ...newPokemones]);
    setPokemonesFiltrados((prev) => [...prev, ...newPokemones]);
    setSiguienteUrl(next);
    if (next === null) {
      setVerMas(false);
    }
  };

  const searchPokemon = async (busqueda) => {
    const url = `${URL_ENDPOINT}${busqueda.toLowerCase()}`;
    return await fetchPokemon(url);
  };

  const filtrarPokemones = (busqueda) => {
    const pokemonFiltrados = pokemones.filter((pokemon) =>
      pokemon.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    setPokemonesFiltrados(pokemonFiltrados);
  };

  useEffect(() => {
    obtenerPokemones();
  }, []);

  return {
    pokemones: pokemonesFiltrados,
    masPokemones,
    verMas,
    searchPokemon,
    filtrarPokemones,
  };
}

export default usePokemones;