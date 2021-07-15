import { PokemonRequestGetAllPokemon } from "./../types/types.pokemon";
import { PokemonActions, PokemonTypes } from "../reducers/reducer.pokemon";
import { call, put, takeLatest } from "redux-saga/effects";
import PokemonService from "~/data/services/pokemon";

function* getAllPokemons(action: PokemonRequestGetAllPokemon) {
  try {
    const response = yield call(PokemonService.getAllPokemons);
  } catch (error) {}
}

export default function* root() {
  yield [];
}
