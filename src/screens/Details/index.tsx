import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  addFavorite,
  FavoriteProps,
  getFavoriteList,
  removeFavorite,
} from "../../utils/firebase";
import Loading from "../../components/Loading";
import PokemonService from "../../data/services/pokemon";
import { PokemonFactory, PokemonInfo } from "../../data/services/pokemon/types";
import Content from "./Content";
import {
  ArrowIcon,
  Container,
  ContentContainer,
  Header,
  HeaderTitle,
  IconContainer,
  LikeContainer,
  LikeIcon,
  PokemonImage,
  PokemonImageContainer,
  TitleContainer,
} from "./styles";
import { Alert } from "react-native";

interface Params {
  item: PokemonFactory;
}

interface DetailsProps {
  isFavorite: boolean;
  onFavoriteClick: () => void;
}
const Details: React.FC = () => {
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo>();
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<FavoriteProps[]>([]);
  const routes = useRoute();
  const navigate = useNavigation();

  const { item } = routes.params as Params;

  useEffect(() => {
    getPokemonInfo();
    fetchFavorites();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (pokemonInfo) {
        setLoading(false);
      }
    }, 1000);
  }, [pokemonInfo]);

  const fetchFavorites = async () => {
    const parsedFavorites = await getFavoriteList();
    setFavorites(parsedFavorites);
  };

  const getPokemonInfo = async () => {
    const response = await PokemonService.getPokemonStats(Number(item.id));
    if (response) {
      setPokemonInfo(response);
    }
  };

  const handleNavigationGoBack = () => {
    navigate.goBack();
  };

  const isFavorite = (item: PokemonFactory) => {
    return favorites.some((favorite) => favorite.id === item.id);
  };

  const handleAddFavorite = async (item: PokemonFactory) => {
    if (!isFavorite(item)) {
      if (favorites.length < 5) {
        await addFavorite(item);
        await fetchFavorites();
      } else {
        Alert.alert("Você já possui 5 pokemons na lista de favoritos");
      }
    } else {
      await removeFavorite(item.id);
      await fetchFavorites();
    }
  };

  const renderLoading = () => <Loading />;

  const renderContent = () => (
    <Container>
      <Header>
        <IconContainer onPress={handleNavigationGoBack}>
          <ArrowIcon />
        </IconContainer>
        <TitleContainer>
          <HeaderTitle>Detalhes</HeaderTitle>
        </TitleContainer>
        <LikeContainer>
          <LikeIcon
            favorite={isFavorite(item)}
            onPress={() => {
              handleAddFavorite(item);
            }}
            name={isFavorite(item) ? "favorite" : "favorite-border"}
          />
        </LikeContainer>
      </Header>
      <PokemonImageContainer>
        <PokemonImage
          width={300}
          height={300}
          source={{
            uri: item.image,
          }}
        />
      </PokemonImageContainer>
      <ContentContainer>
        <Content
          item={item}
          pokemonInfo={pokemonInfo!}
          onPressLikeButton={() => {}}
        />
      </ContentContainer>
    </Container>
  );

  const validateRender = () => {
    if (loading) {
      return renderLoading();
    } else {
      return renderContent();
    }
  };

  return validateRender();
};

export default Details;
