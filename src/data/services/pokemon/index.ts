import { Pokemon } from "./../../../redux/types/types.pokemon";
import makeRequest from "../../../data/datasource/api/makeRequest";
import action from "./actions";
import { factoryPokemon } from "./factory";
import { PokemonFactory } from "./types";

const PokemonService = {
  async getAllPokemons(): Promise<PokemonFactory[]> {
    const response = await makeRequest({
      url: action.getAll,
    });

    if (response.status !== 200) {
    }

    return factoryPokemon(response.data.results);
  },
};

export default PokemonService;
