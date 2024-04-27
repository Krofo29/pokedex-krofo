import React from 'react';
import '../components/Navbar.css'
import Buscador from './Buscador'
import Logo from '../assets/Logo.svg';

const Navbar = () => {

    return (
        <nav>
           <img className="logoPokemon" src={Logo} alt="Logo Pokemon" />
            <div>
                <label>
                    <imput type="checkbox"/>
                    <span></span>
                </label>
            </div>
              <Buscador />
        </nav>
    )
}

export default Navbar;