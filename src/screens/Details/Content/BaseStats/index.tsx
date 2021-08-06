import React from "react";
import { PokemonFactory } from "~/data/services/pokemon/types";
import { ChildrenContainer, Container, Title, TitleContainer } from "./styles";

interface BaseStatsProps {
  item: PokemonFactory;
  children: React.ReactNode;
}
const BaseStats: React.FC<BaseStatsProps> = ({ item, children }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{item.name}</Title>
      </TitleContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};

export default BaseStats;
