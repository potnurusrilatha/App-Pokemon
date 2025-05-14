'use client'

import './pokemon.scss'
import { PokemonType } from '@/utils/types'
import React, { useState } from 'react'
import DisplayPokemon from '@/components/DisplayPokemon'

const Pokemon = () => {
  const [caughtPokemon, setCaughtPokemon] = useState<PokemonType | null >(null)

  const fetchPokemon = async () :Promise<void> => {
  try {
   const randomNum: number = Math.floor(Math.random() * 151)
   const API_URL: string ="https://pokeapi.co/api/v2"
   const response= await fetch(`${API_URL}/pokemon/${randomNum}`)
   const data = await response.json();

   const pokemonData: PokemonType = {
     id: data.id,
     name: data.name,
     image: data.sprites.front_default,
     types: data.types.map((item: { type: { name: string; }; }) => item.type.name)
   }

   setCaughtPokemon(pokemonData)
 
    
  }catch(error){
    console.log(`Something went wrong: ${error}`)
  }
}

  return (
    <div className='pokemon__container'>
      {caughtPokemon && <DisplayPokemon {...caughtPokemon}/>}
     <button onClick={fetchPokemon} className="pokemon__container--button">Catch a Pokemon</button>
     {/* {caughtPokemon && <p>{caughtPokemon.name}</p>} */}
    </div>
  )
}

export default Pokemon
