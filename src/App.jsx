import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'


function App() {

const [pokemones, setPokemones] = useState([])

useEffect(() => {
const getPokemones = async () => {
const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
const listaPokemones = await response.json()
const { results } = listaPokemones

const newPokemones = results.map( async (pokemon) => {
const response = await fetch(pokemon.url)
const poke = await response.json()

return {
  id: poke.id,
  name: poke.name,
  img: poke.sprites.other.dream_world.front_default,
}
})
console.log(newPokemones)
setPokemones(await Promise.all(newPokemones));
}

getPokemones()
}, [])

  return (
    <>
    <Navbar />
      <div>
{
  pokemones.map(pokemon => {
    return (
      <div>
        <span>{pokemon.id}</span>
        <p>{pokemon.name}</p>
        <img src={pokemon.img} alt={pokemon.name}/>
      </div>
    )
  })
}

      </div>
    </>
  )
}

export default App