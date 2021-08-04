import React from "react";
import { PokemonFactory } from "~/data/services/pokemon/types";
import {
  Container,
  Content,
  LikeContainer,
  LikeIcon,
  PokemonImage,
  Title,
  TitleContainer,
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
        <LikeContainer>
          <LikeIcon />
        </LikeContainer>
      </Content>
    </Container>
  );
};

export default ListItem;
