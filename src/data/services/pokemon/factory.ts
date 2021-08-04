import { PokemonFactory } from "./types";
import { Pokemon } from "./../../../redux/types/types.pokemon";
export const factoryPokemon = (pokemonList: Pokemon[]): PokemonFactory[] => {
  const result: PokemonFactory[] = [];

  pokemonList.forEach((pokemon) => {
    const id = pokemon.url
      .substr(pokemon.url.length - 3)
      .replace(/[\[\].!'@,><|://\\;&*()_+=]/g, "");
    const parsedPokemon: PokemonFactory = {
      id,
      name: pokemon.name,

      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
    };

    result.push(parsedPokemon);
  });

  return result;
};
