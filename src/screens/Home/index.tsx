import { useNavigation } from "@react-navigation/native";
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { ActivityIndicator, RefreshControl } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Pokemon } from "~/redux/types/types.pokemon";
import HeaderSearch from "../../components/HeaderSearch";
import InputSearch from "../../components/InputSearch";
import Loading from "../../components/Loading";
import { PokemonFactory } from "../../data/services/pokemon/types";
import { theme } from "../../global/theme/theme";
import { PokemonActions } from "../../redux/reducers/reducer.pokemon";
import {
  getPokemonMetadata,
  getPokemons,
} from "../../redux/selectors/selector.pokemon";
import { LIMIT_PAGE } from "../../utils/constants";
import ListItem from "./ListItem";
import { Container, HeaderContainer, PokemonList } from "./styles";

const Home: React.FC = () => {
  const [page, setPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [load, setLoad] = useState(true);
  const [searching, setSearching] = useState(false);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  const searchTextRef = useRef<ReactNode>(null);

  const dispatch = useDispatch();
  const pokemons = useSelector(getPokemons);
  const { loading } = useSelector(getPokemonMetadata);
  const navigate = useNavigation();

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

  useEffect(() => {
    if (searchText === "") {
      setFilteredPokemons([]);
    }
  }, [searchText]);

  useEffect(() => {
    console.tron.log("Filtred", filteredPokemons);
  }, [filteredPokemons]);

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
    setSearching(false);
    setSearchText("");
  };

  const onBackPress = useCallback(() => {
    setSearchText("");
    setSearching(false);
  }, []);

  const parseFilteredPokemons = (search: string) => {
    const filtered = pokemons.filter((pokemon) => pokemon.name === search);
    if (filtered.length === 0) {
    } else {
      setFilteredPokemons(filtered);
    }
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

  const renderHeaderSearch = () => (
    <HeaderContainer>
      <InputSearch
        placeholder="digite..."
        testID="search-input"
        onChangeText={(text) => {
          setSearchText(text);
        }}
        onEndEditing={() => {}}
        autoCapitalize="none"
        autoCorrect={false}
        ref={searchTextRef}
        onBlur={() => {}}
        onBackPress={onBackPress}
        onClear={() => {
          setSearchText("");
        }}
        onSubmitEditing={() => {
          parseFilteredPokemons(searchText);
        }}
        autoFocus={true}
      />
    </HeaderContainer>
  );

  const renderContent = () => (
    <Container>
      {searching ? (
        renderHeaderSearch()
      ) : (
        <HeaderSearch
          title="Pokemon List"
          onSearchPress={() => {
            setSearchText("");
            setSearching(true);
          }}
        />
      )}

      <PokemonList
        data={filteredPokemons?.length > 0 ? filteredPokemons : pokemons}
        renderItem={renderItem}
        keyExtractor={(item: PokemonFactory) => String(item.id)}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={handleRefetch}
            colors={[theme.colors.primary]}
            tintColor={theme.colors.primary}
          />
        }
        onEndReachedThreshold={0.2}
        onEndReached={() => {
          if (!loading && filteredPokemons.length === 0) {
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
