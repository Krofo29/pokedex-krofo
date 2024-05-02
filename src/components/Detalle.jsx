import './Detalle.css';

function Detalle({ mostrar, pokemon, cerrar }) {
    return (
        <div className='tarjetaDetalle' onClick={cerrar} style={{ display: mostrar ? 'grid' : 'none' }}>
            <section className='tarjetaCuerpo'>
                <div className='tarjetaImagen'>
                    <img src={pokemon.imagen} alt={pokemon.nombre} className="imagenDetalle" />
                    <section className='tiposContainer'>
                        {pokemon.types?.map((type, index) => <span key={index} className='tag'>{type}</span>)}
                    </section>
                </div>
                <div className='tarjetaData'>
                    <h2 className='titulo'>#{pokemon.id} {pokemon.nombre}</h2>

                    <h3 className='tituloStats'>HABILIDADES</h3>
                    <div className='habilidadesContainer'>
                        {pokemon.abilities?.map((ability, index) => <span key={index} className='habilidades'>{ability.toUpperCase()}</span>)}
                    </div>

                    <h3 className='tituloStats'>ESTADISTICAS</h3>
                    <div className='estadisticas'>
                        {pokemon.stats?.map((stat, index) =>
                            <section key={index}>
                                <span className='puntos'>{stat.base}</span>
                                <span>{stat.name}</span>
                            </section>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Detalle;