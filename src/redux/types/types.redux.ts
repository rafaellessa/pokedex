import { ImmutableObject } from "seamless-immutable";

import { PokemonState } from "./types.pokemon";

export enum PokemonReducers {
  root = "pokemon_store",
  pokemon = "Pokemon",
}

export interface PokedexState {
  [PokemonReducers.pokemon]: PokemonState;
}

export interface PokedexStateRoot {
  [PokemonReducers.root]: ImmutableObject<PokedexState>;
}
