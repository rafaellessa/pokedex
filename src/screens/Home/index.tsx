import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderSearch from "../../components/HeaderSearch";
import { PokemonActions } from "../../redux/reducers/reducer.pokemon";
import { getPokemons } from "../../redux/selectors/selector.pokemon";
import { Container, PokemonList } from "./styles";
import ListItem from "./ListItem";
import { PokemonFactory } from "~/data/services/pokemon/types";
import { ActivityIndicator, RefreshControl } from "react-native";
import { theme } from "../../global/theme/theme";
import { useState } from "react";

const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const pokemons = useSelector(getPokemons);
  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {}, [pokemons]);

  useEffect(() => {
    if (page > 1) {
      fetchPokemons();
    }
  }, [page]);

  const fetchPokemons = async () => {
    if (page > 1) {
      const limit = 20;
      const offset = page * limit;
      dispatch(PokemonActions.pokedexRequestGetAllPokemon({ offset }));
    } else {
      dispatch(PokemonActions.pokedexRequestGetAllPokemon({}));
    }
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
        onEndReachedThreshold={0.1}
        onEndReached={() => {
          setPage(page + 1);
        }}
        ListFooterComponent={<ActivityIndicator />}
      />
    </Container>
  );
};

export default Home;
