export interface PokemonFactory {
  name: string;
  id: string;
  abilities?: PokemonAbilites;
  image: string;
  stats?: PokemonStats[];
  type?: string;
}

interface PokemonAbilites {
  name: string;
  description: string;
}

interface PokemonStats {
  name: string;
  count: number;
}
