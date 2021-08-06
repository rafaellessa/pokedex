import { PokemonFactory, PokemonInfo, PokemonInfoReturnApi } from "./types";
import { Pokemon } from "./../../../redux/types/types.pokemon";
export const factoryPokemon = (pokemonList: Pokemon[]): PokemonFactory[] => {
  const result: PokemonFactory[] = [];

  pokemonList.forEach((pokemon) => {
    const id = pokemon.url
      .substr(33)
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

export const factoryPokemonStats = (
  data: PokemonInfoReturnApi
): PokemonInfo => {
  const result: PokemonInfo = {
    abilities: data.abilities.map((ability) => {
      return {
        name: ability.ability.name,
        url: ability.ability.url,
      };
    }),
    species: data.species,
    stats: data.stats.map((stat) => {
      return {
        name: stat.stat.name,
        count: stat.base_stat,
      };
    }),
    types: data.types.map((type) => {
      return {
        name: type.type.name,
        url: type.type.url,
      };
    }),
  };

  return result;
};
