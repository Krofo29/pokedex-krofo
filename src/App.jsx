import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Pokemones from './components/Pokemones'

function App() {
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null);

  return (
    <>
      <Navbar setPokemonSeleccionado={setPokemonSeleccionado} />
      <Pokemones pokemonSeleccionado={pokemonSeleccionado} />
    </>
  )
}

export default App;