import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { PokemonFactory } from "~/data/services/pokemon/types";
import Content from "./Content";
import {
  Container,
  Header,
  HeaderTitle,
  IconContainer,
  ArrowIcon,
  TitleContainer,
  PokemonImageContainer,
  PokemonImage,
  ContentContainer,
} from "./styles";

interface Params {
  item: PokemonFactory;
}

const Details: React.FC = () => {
  const routes = useRoute();
  const navigate = useNavigation();

  const { item } = routes.params as Params;

  const handleNavigationGoBack = () => {
    navigate.goBack();
  };

  return (
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
      <Content item={item} />
    </Container>
  );
};

export default Details;
