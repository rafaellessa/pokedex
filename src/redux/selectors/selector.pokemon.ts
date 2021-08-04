import {
  PokedexState,
  PokedexStateRoot,
  PokemonReducers,
} from "./../types/types.redux";

import { Pokemon } from "./../types/types.pokemon";

export const getPokemons = (state: PokedexStateRoot): Pokemon[] => {
  return state[PokemonReducers.root][PokemonReducers.pokemon];
};
