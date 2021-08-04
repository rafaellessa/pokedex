import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import {
  CreatorTypes,
  PokemonActionTypes,
  ReducerTypes,
  PokemonState,
} from "../types/types.pokemon";

import { PokemonReducers } from "../types/types.redux";

const { Types, Creators } = createActions<PokemonActionTypes, CreatorTypes>(
  {
    pokedexRequestGetAllPokemon: null,
    pokedexSuccessGetAllPokemon: ["pokemon"],
    pokedexFailureGetAllPokemon: ["error"],
    reset: null,
  },
  {
    prefix: `${PokemonReducers.root}/${PokemonReducers.pokemon}/`,
  }
);

const INITIAL_STATE: PokemonState = Immutable({
  pokemons: [],
  loading: false,
  error: null,
});

export const reducer = createReducer<PokemonState, ReducerTypes>(
  INITIAL_STATE,
  {
    [Types.POKEDEX_REQUEST_GET_ALL_POKEMON]: (state) => {
      return state.merge({
        loading: true,
        error: null
      });
    },
    [Types.POKEDEX_SUCCESS_GET_ALL_POKEMON]: (state, action) => {
      
      return state.merge({
        loading: false,
        pokemons: action.pokemon,
        error: null
      })
    },
    [Types.POKEDEX_FAILURE_GET_ALL_POKEMON]: (state, action) => {
      return state.merge({
        loading: false,
        error: action.error
      })
    },
    [Types.RESET]: () => INITIAL_STATE,
  }
);

export const PokemonActions = Creators;
export const PokemonTypes = Types;
