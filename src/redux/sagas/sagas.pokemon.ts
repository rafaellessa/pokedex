import { call, put, select, takeLatest } from "redux-saga/effects";
import PokemonService from "../../data/services/pokemon";
import { PokemonActions, PokemonTypes } from "../reducers/reducer.pokemon";
import { getPokemons } from "../selectors/selector.pokemon";
import { PokemonRequestGetAllPokemon } from "./../types/types.pokemon";

function* getAllPokemons({ data }: PokemonRequestGetAllPokemon) {
  try {
    const offset = data?.offset;
    const response = yield call(PokemonService.getAllPokemons, { offset });

    if (offset) {
      const previousPokemon = yield select(getPokemons);
      const newPokemons = [...previousPokemon, ...response];
      yield put(PokemonActions.pokedexSuccessGetAllPokemon(newPokemons));
    } else {
      yield put(PokemonActions.pokedexSuccessGetAllPokemon(response));
    }
  } catch (error) {
    yield put(PokemonActions.pokedexFailureGetAllPokemon(error.message));
  }
}

export default function* root() {
  yield takeLatest(
    PokemonTypes.POKEDEX_REQUEST_GET_ALL_POKEMON,
    getAllPokemons
  );
}
