import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderSearch from "../../components/HeaderSearch";
import { PokemonActions } from "../../redux/reducers/reducer.pokemon";
import { getPokemons } from "../../redux/selectors/selector.pokemon";
import { Container, PokemonList } from "./styles";
import ListItem from "./ListItem";
import { PokemonFactory } from "~/data/services/pokemon/types";
import { RefreshControl } from "react-native";
import { theme } from "../../global/theme/theme";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector(getPokemons);
  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {}, [pokemons]);

  const fetchPokemons = async () => {
    dispatch(PokemonActions.pokedexRequestGetAllPokemon());
  };
  const renderItem = ({ item }: { item: PokemonFactory }) => (
    <ListItem name={item.name} id={item.id} image={item.image} />
  );

  return (
    <Container>
      <HeaderSearch title="Pokemon List" />
      <PokemonList
        data={pokemons}
        renderItem={renderItem}
        keyExtractor={(item: PokemonFactory) => String(item.name)}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={fetchPokemons}
            colors={[theme.colors.primary]}
            tintColor={theme.colors.primary}
          />
        }
      />
    </Container>
  );
};

export default Home;
