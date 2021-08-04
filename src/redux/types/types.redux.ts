import { ImmutableObject } from "seamless-immutable";

import { PokemonState } from "./types.pokemon";

export enum PokemonReducers {
  root = "reducerPokemon",
  pokemon = "pokemons",
}

export interface PokedexState {
  [PokemonReducers.pokemon]: PokemonState;
}

export interface PokedexStateRoot {
  [PokemonReducers.root]: ImmutableObject<PokedexState>;
}
