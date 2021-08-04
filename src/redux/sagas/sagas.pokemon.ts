import { PokemonRequestGetAllPokemon } from "./../types/types.pokemon";
import { PokemonActions, PokemonTypes } from "../reducers/reducer.pokemon";
import { call, put, takeLatest } from "redux-saga/effects";
import PokemonService from "../../data/services/pokemon";

function* getAllPokemons(action: PokemonRequestGetAllPokemon) {
  try {
        
    const response = yield call(PokemonService.getAllPokemons);

    yield put(PokemonActions.pokedexSuccessGetAllPokemon(response))
    
  } catch (error) {
    yield put(PokemonActions.pokedexFailureGetAllPokemon(error.message))
  }
}

export default function* root() {
  yield takeLatest(
		PokemonTypes.POKEDEX_REQUEST_GET_ALL_POKEMON,
    getAllPokemons
	);
  
}