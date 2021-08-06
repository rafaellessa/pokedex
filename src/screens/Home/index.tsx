import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderSearch from "../../components/HeaderSearch";
import { PokemonActions } from "../../redux/reducers/reducer.pokemon";
import {
  getPokemonMetadata,
  getPokemons,
} from "../../redux/selectors/selector.pokemon";
import { Container, PokemonList } from "./styles";
import ListItem from "./ListItem";
import { PokemonFactory } from "~/data/services/pokemon/types";
import { ActivityIndicator, RefreshControl } from "react-native";
import { theme } from "../../global/theme/theme";
import { useState } from "react";
import { LIMIT_PAGE } from "../../utils/constants";
import Loading from "../../components/Loading";
import { useNavigation } from "@react-navigation/native";

const Home: React.FC = () => {
  const navigate = useNavigation();

  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);

  const pokemons = useSelector(getPokemons);
  const { loading } = useSelector(getPokemonMetadata);

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (pokemons.length > 0) {
        setLoad(false);
      }
    }, 2000);
  }, [pokemons]);

  useEffect(() => {
    console.tron.log("Page: ", page);
    if (page > 0 && !loading) {
      fetchPokemons();
    }
  }, [page]);

  const fetchPokemons = async () => {
    if (page > 1) {
      const limit = LIMIT_PAGE;
      const offset = page * limit;
      dispatch(PokemonActions.pokedexRequestGetAllPokemon({ offset }));
    } else if (page === 1) {
      dispatch(PokemonActions.pokedexRequestGetAllPokemon({ offset: 20 }));
    } else {
      dispatch(PokemonActions.pokedexRequestGetAllPokemon({}));
    }
  };

  const handleNavigate = (item: PokemonFactory) => {
    navigate.navigate("Details", { item });
  };

  const renderItem = ({ item }: { item: PokemonFactory }) => (
    <ListItem
      onClick={() => {
        handleNavigate(item);
      }}
      name={item.name}
      id={item.id}
      image={item.image}
      key={item.id}
    />
  );

  const renderLoading = () => <Loading />;

  const renderContent = () => (
    <Container>
      <HeaderSearch title="Pokemon List" />
      <PokemonList
        data={pokemons}
        renderItem={renderItem}
        keyExtractor={(item: PokemonFactory) => String(item.id)}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={fetchPokemons}
            colors={[theme.colors.primary]}
            tintColor={theme.colors.primary}
          />
        }
        onEndReachedThreshold={0.2}
        onEndReached={() => {
          if (!loading) {
            setPage(page + 1);
          }
        }}
        ListFooterComponent={loading ? <ActivityIndicator /> : null}
      />
    </Container>
  );

  const validateRender = () => {
    if (load) {
      return renderLoading();
    } else {
      return renderContent();
    }
  };

  return validateRender();
};

export default Home;
