import React from 'react';
import usePokemones from '../hooks/usePokemones';
import InfiniteScroll from 'react-infinite-scroll-component';
import './Pokemones.css';

function PokemonComponent({ id, nombre, imagen }) {
    return (
        <div className='pokemon-card'>
            <p className='pokemon-titulo'>
                <span>#{id} {nombre.toUpperCase()}</span>
            </p>
            <img src={imagen} alt={nombre} className='pokemon-imagen'/>
        </div>
    )
}

function Pokemones() {
    const { pokemones, masPokemones, siguienteUrl } = usePokemones();

    return (
        <InfiniteScroll
            dataLength={pokemones.length}
            next={masPokemones}
            hasMore={siguienteUrl !== null}
            loader={<h4>Cargando...</h4>}
            endMessage={<h3 className='titulo' style={{ gridColumn: '1/6' }}></h3>}
            className='pokemon-container'
        >
            {pokemones.map(pokemon => <PokemonComponent key={pokemon.id} {...pokemon} />)}
        </InfiniteScroll>
    );
}

export default Pokemones;