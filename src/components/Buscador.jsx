import React from 'react';
import './buscador.css'
import Buscar from '../assets/Buscar.svg';

function Buscador() {
    return (
        <>
        <section className='container-buscador'>
            <input type="text" placeholder='BUSCADOR' className='input-buscar'/>
            <button className='btn-buscar'>
                 <img className="iconoBuscar" src={Buscar} alt="Logo Buscar" />
            </button>
        </section>
        </>
    );
}

export default Buscador;