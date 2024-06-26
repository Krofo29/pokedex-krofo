import React, { useState } from 'react';
import './Navbar.css';
import Buscador from './Buscador';
import Logo from '../assets/Logo.svg';
import usePokemones from '../hooks/usePokemones';

const Navbar = ({ setPokemonSeleccionado }) => {
    const [busqueda, setBusqueda] = useState('');
    const { searchPokemon } = usePokemones();

    const buscarPokemon = async () => {
        if (!busqueda) return;
        const pokemon = await searchPokemon(busqueda);
        console.log("Pokemon buscado:", pokemon);
        setPokemonSeleccionado(pokemon);
    };

    return (
        <nav>
            <img className="logoPokemon" src={Logo} alt="Logo Pokemon" />
            <Buscador busqueda={busqueda} setBusqueda={setBusqueda} buscarPokemon={buscarPokemon} />
        </nav>
    );
};

export default Navbar;