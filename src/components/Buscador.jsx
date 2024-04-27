import './buscador.css'
import Buscar from '../assets/Buscar.svg';

function Buscador() {

    return (
        <>
        <section classname='container-buscador'>
            <input type="text" placeholder='BUSCADOR DE POKEMON' className='input-buscar'/>
            <button className='btn-buscar'>
                 <img className="logobuscar" src={Buscar} alt="Pokebola Buscador" />
            </button>
        </section>
        </>
    )
}

export default Buscador;