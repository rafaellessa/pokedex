import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, RefreshControl } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { PokemonFactory } from "~/data/services/pokemon/types";
import HeaderSearch from "../../components/HeaderSearch";
import Loading from "../../components/Loading";
import { theme } from "../../global/theme/theme";
import { PokemonActions } from "../../redux/reducers/reducer.pokemon";
import {
  getPokemonMetadata,
  getPokemons,
} from "../../redux/selectors/selector.pokemon";
import { LIMIT_PAGE } from "../../utils/constants";
import ListItem from "./ListItem";
import { Container, PokemonList } from "./styles";

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
    console.tron.log("Pokemons: ", pokemons);
    setTimeout(() => {
      if (pokemons.length > 0) {
        setLoad(false);
      }
    }, 2000);
  }, [pokemons]);

  const fetchPokemons = async (offset?: number) => {
    if (offset) {
      const limit = LIMIT_PAGE;
      offset = offset * limit;
      dispatch(PokemonActions.pokedexRequestGetAllPokemon({ offset }));
    } else {
      dispatch(PokemonActions.pokedexRequestGetAllPokemon({}));
    }
  };

  const handleRefetch = () => {
    setPage(0);
    fetchPokemons();
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
            refreshing={loading}
            onRefresh={handleRefetch}
            colors={[theme.colors.secondary]}
            tintColor={theme.colors.secondary}
          />
        }
        onEndReachedThreshold={0.2}
        onEndReached={() => {
          if (!loading) {
            fetchPokemons(page + 1);
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
