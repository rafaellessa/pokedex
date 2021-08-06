import makeRequest from "../../../data/datasource/api/makeRequest";
import { PokemonRequestGetAllPokemonParams } from "./../../../redux/types/types.pokemon";
import action from "./actions";
import { factoryPokemon, factoryPokemonStats } from "./factory";
import { PokemonFactory, PokemonInfo } from "./types";

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
  async getPokemonStats(id: number): Promise<PokemonInfo> {
    const response = await makeRequest({
      url: action.getPokemonStats + id,
    });

    return factoryPokemonStats(response.data);
  },
};

export default PokemonService;
