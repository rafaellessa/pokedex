import { Pokemon } from "./../../../redux/types/types.pokemon";
import makeRequest from "../../../data/datasource/api/makeRequest";
import action from "./actions";

const PokemonService = {
  async getAllPokemons(): Promise<Pokemon[]> {
    const response = await makeRequest({
      url: action.getAll,
    });

    if (response.status !== 200) {
    }
    return response.data.results;
  },
};

export default PokemonService;
