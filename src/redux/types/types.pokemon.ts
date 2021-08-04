import { Action } from "redux";
import { ImmutableObject } from "seamless-immutable";

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonActionTypes {
  POKEDEX_REQUEST_GET_ALL_POKEMON: string;
  POKEDEX_SUCCESS_GET_ALL_POKEMON: string;
  POKEDEX_FAILURE_GET_ALL_POKEMON: string;

  RESET: string;
}

export interface State {
  pokemons: Pokemon[];
  loading: boolean;
  error: string | null;
}

export type PokemonState = ImmutableObject<State>;

//export type PokemonRequestGetAllPokemon = Action<PokemonActionTypes>;

export interface PokemonRequestGetAllPokemonParams {
  offset?: number;
}
export interface PokemonRequestGetAllPokemon
  extends Action<PokemonActionTypes> {
  data?: PokemonRequestGetAllPokemonParams;
}

export interface PokemonSuccessGetAllPokemon
  extends Action<PokemonActionTypes> {
  pokemons: Pokemon[];
}

export interface PokemonFailureGetAllPokemon
  extends Action<PokemonActionTypes> {
  error: string | null;
}

export interface CreatorTypes {
  pokedexRequestGetAllPokemon(
    data?: PokemonRequestGetAllPokemonParams
  ): PokemonRequestGetAllPokemon;
  pokedexSuccessGetAllPokemon(pokemons: Pokemon[]): PokemonSuccessGetAllPokemon;
  pokedexFailureGetAllPokemon(
    error: string | null
  ): PokemonFailureGetAllPokemon;
}

export type ReducerTypes = PokemonRequestGetAllPokemon &
  PokemonSuccessGetAllPokemon &
  PokemonFailureGetAllPokemon;
