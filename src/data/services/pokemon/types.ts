export interface PokemonFactory {
  name: string;
  id: string;
  image: string;
}

interface PokemonAbilites {
  name: string;
  url: string;
}

interface PokemonStats {
  name: string;
  count: number;
}

interface PokemonSpecies {
  name: string;
  url: string;
}

interface PokemonTypes {
  name: string;
  url: string;
}

export interface PokemonInfo {
  abilities?: PokemonAbilites[];
  stats: PokemonStats[];
  types: PokemonTypes[];
  species: PokemonSpecies;
}

export interface PokemonInfoReturnApi {
  abilities: PokemonAbilitiesReturnApi[];
  species: PokemonSpecies;
  stats: PokemonStatsReturnApi[];
  types: PokemonTypesReturnApi[];
}

interface PokemonAbilitiesReturnApi {
  ability: PokemonAbilites;
}

interface PokemonStatsReturnApi {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  };
}

interface PokemonTypesReturnApi {
  type: {
    name: string;
    url: string;
  };
}
