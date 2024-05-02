import React, { useState, useEffect } from 'react';
import usePokemones from '../hooks/usePokemones';
import InfiniteScroll from 'react-infinite-scroll-component';
import Detalle from './Detalle';
import './Pokemones.css';

function PokemonComponent({ id, nombre, imagen, verPokemon }) {
    return (
        <div className='pokemon-card' onClick={verPokemon}>
            <p className='pokemon-titulo'>
                <span>#{id} {nombre.toUpperCase()}</span>
            </p>
            <img src={imagen} alt={nombre} className='pokemon-imagen'/>
        </div>
    )
}

function Pokemones({ pokemonSeleccionado }) {
    const { pokemones, masPokemones, siguienteUrl } = usePokemones();
    const [mostrar, setMostrar] = useState({ mostrar: false, pokemon: {} });

    const verPokemon = (pokemon) => setMostrar({ mostrar: true, pokemon });

    const noVerPokemon = () => setMostrar({ mostrar: false, pokemon: {} });

    useEffect(() => {
        if (pokemonSeleccionado) {
            verPokemon(pokemonSeleccionado);
        }
    }, [pokemonSeleccionado]);

    return (
        <>
            <Detalle mostrar={mostrar.mostrar} pokemon={mostrar.pokemon} cerrar={noVerPokemon}/>
            <InfiniteScroll
                dataLength={pokemones.length}
                next={masPokemones}
                hasMore={siguienteUrl !== null}
                loader={<h4>Cargando...</h4>}
                endMessage={<h3 className='titulo' style={{ gridColumn: '1/6' }}></h3>}
                className='pokemon-container'
            >
                {pokemones.map(pokemon => (
                    <PokemonComponent 
                        key={pokemon.id} 
                        {...pokemon} 
                        verPokemon={() => verPokemon(pokemon)} 
                    /> 
                ))}
            </InfiniteScroll>
        </>
    );
}

export default Pokemones;