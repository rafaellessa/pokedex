import makeRequest from "../../../data/datasource/api/makeRequest";
import action from "./actions";

const PokemonService = {
  async getAllPokemons() {
    const response = await makeRequest({
      url: action.getAll,
    });

    return response.data;
  },
};

export default PokemonService;
