import React from "react";
import { PokemonInfo } from "~/data/services/pokemon/types";
import { abbreviateStat } from "../../../utils/string";
import { factoryChartColor } from "./model";
import {
  Container,
  Content,
  ChartContainer,
  Title,
  InfoContainer,
  ChartView,
  Count,
  TotalContainer,
  ChartColor,
} from "./styles";

interface BaseStatProps {
  baseStat: PokemonInfo;
}

const Chart: React.FC<BaseStatProps> = ({ baseStat }) => {
  let total = 0;
  return (
    <Container>
      {baseStat.stats.map((stat) => {
        total += stat.count;
        return (
          <ChartView>
            <InfoContainer>
              <Title>{abbreviateStat(stat.name).toUpperCase()}</Title>
              <Count count={factoryChartColor(stat.count)}>{stat.count}</Count>
            </InfoContainer>
            <ChartContainer>
              <ChartColor count={factoryChartColor(stat.count)} />
            </ChartContainer>
          </ChartView>
        );
      })}
      <TotalContainer>
        <Title>TOTAL</Title>
        <Count>{total}</Count>
      </TotalContainer>
    </Container>
  );
};

export default Chart;
