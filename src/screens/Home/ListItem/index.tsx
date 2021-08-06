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

interface ListItemProps extends PokemonFactory {
  onClick: (item: PokemonFactory) => void;
}

const ListItem: React.FC<ListItemProps> = ({ id, name, image, onClick }) => {
  return (
    <Container>
      <Content onPress={onClick}>
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
