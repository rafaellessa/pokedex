
import { Pokemon } from './../types/types.pokemon';

export const getPokemons = (
	state: any,
): Pokemon[] => {    
  return state.reducerPokemon.pokemons
};


