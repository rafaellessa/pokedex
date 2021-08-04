import {
  Pokemon,
  PokemonRequestGetAllPokemonParams,
} from "./../../../redux/types/types.pokemon";
import makeRequest from "../../../data/datasource/api/makeRequest";
import action from "./actions";
import { factoryPokemon } from "./factory";
import { PokemonFactory } from "./types";
import { AxiosResponse } from "axios";

const PokemonService = {
  async getAllPokemons({
    offset,
  }: PokemonRequestGetAllPokemonParams): Promise<PokemonFactory[]> {
    const response = await makeRequest({
      url: offset
        ? `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
        : action.getAll,
    });

    if (response.status !== 200) {
    }

    return factoryPokemon(response.data.results);
  },
};

export default PokemonService;
