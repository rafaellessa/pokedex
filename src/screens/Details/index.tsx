import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
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
  PokemonImage,
  PokemonImageContainer,
  TitleContainer,
} from "./styles";

interface Params {
  item: PokemonFactory;
}

const Details: React.FC = () => {
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo>();
  const [loading, setLoading] = useState(true);
  const routes = useRoute();
  const navigate = useNavigation();

  const { item } = routes.params as Params;

  useEffect(() => {
    getPokemonInfo();
  }, []);

  useEffect(() => {
    console.tron.log("Pokemon Info: ", pokemonInfo);
    setTimeout(() => {
      if (pokemonInfo) {
        setLoading(false);
      }
    }, 1000);
  }, [pokemonInfo]);

  const getPokemonInfo = async () => {
    const response = await PokemonService.getPokemonStats(1);
    if (response) {
      setPokemonInfo(response);
    }
  };

  const handleNavigationGoBack = () => {
    navigate.goBack();
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
        <Content item={item} />
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
