import React from "react";
import { PokemonInfo } from "~/data/services/pokemon/types";
import { Container } from "./styles";

interface BaseStatProps {
  baseStat: PokemonInfo;
}

const Chart: React.FC<BaseStatProps> = ({ baseStat }) => {
  return <Container />;
};

export default Chart;
