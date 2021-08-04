import React from "react";

import { PokemonFactory } from "~/data/services/pokemon/types";

import {
  Badge,
  Container,
  Content,
  PokemonImage,
  Title,
  TitleContainer,
  BadgeContainer,
  BadgeTitle,
} from "./styles";

type ListItemProps = PokemonFactory;

const ListItem: React.FC<ListItemProps> = ({ id, name, image }) => {
  return (
    <Container>
      <Content>
        <PokemonImage
          width={80}
          height={80}
          source={{
            uri: image,
          }}
        />
        <TitleContainer>
          <Title>{name}</Title>
        </TitleContainer>
        <BadgeContainer>
          <Badge>
            <BadgeTitle>Special</BadgeTitle>
          </Badge>
        </BadgeContainer>
      </Content>
    </Container>
  );
};

export default ListItem;
