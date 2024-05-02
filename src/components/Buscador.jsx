import React from 'react';
import './Buscador.css';
import Buscar from '../assets/Buscar.svg';

function Buscador({ busqueda, setBusqueda, buscarPokemon }) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (busqueda.trim() !== '') {
            await buscarPokemon();
        }
    };

    return (
        <form className='container-buscador' onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='BUSCADOR' 
                className='inputBuscar'
                value={busqueda} 
                onChange={(e) => setBusqueda(e.target.value)}
            />
            <button className='btn-buscar' type='submit'>
                <img className="iconoBuscar" src={Buscar} alt="Logo Buscar" />
            </button>
        </form>
    );
}

export default Buscador;