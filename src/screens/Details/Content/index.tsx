import React, { useState } from "react";
import { View } from "react-native";
import { PokemonFactory, PokemonInfo } from "~/data/services/pokemon/types";
import TabViewCustom from "../../../components/TabView";
import BaseStats from "./BaseStats";
import { factoryRouteTabs } from "./model";
import {
  ButtonLikeContainer,
  ButtonLikeTitle,
  Container,
  FooterContainer,
  LikeIcon,
} from "./styles";
import Chart from "../Chart";

interface ContentProps {
  item: PokemonFactory;
  pokemonInfo: PokemonInfo;
  onPressLikeButton: () => void;
}

const Content: React.FC<ContentProps> = ({
  item,
  pokemonInfo,
  onPressLikeButton,
}) => {
  const [index, setIndex] = useState(0);
  const routes = factoryRouteTabs();

  const renderScene = () => {
    switch (index) {
      case 0:
        return (
          <BaseStats item={item} children={<Chart baseStat={pokemonInfo} />} />
        );
      case 1:
        return <Container />;
      case 2:
        return <Container />;
    }
  };

  return (
    <Container>
      <TabViewCustom
        index={index}
        setIndex={setIndex}
        renderScene={renderScene}
        routes={routes}
      />

      {/* <FooterContainer>
        <ButtonLikeContainer>
          <ButtonLikeTitle onPress={onPressLikeButton}>
            Favoritar
          </ButtonLikeTitle>
          <LikeIcon />
        </ButtonLikeContainer>
      </FooterContainer> */}
    </Container>
  );
};

export default Content;
