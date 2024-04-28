import '../components/Navbar.css'
import Buscador from './Buscador'
import Logo from '../assets/Logo.svg';

const Navbar = () => {
    return (
        <nav>
           <img className="logoPokemon" src={Logo} alt="Logo Pokemon" />
            <div>
                <label>
                    <input type="checkbox"/>
                    <span></span>
                </label>
            </div>
              <Buscador />
        </nav>
    )
}

export default Navbar;