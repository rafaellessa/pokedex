import React from "react";
import { Container } from "./styles";

interface BaseStatProps {
  baseStat: BaseStatChartProps[];
}

interface BaseStatChartProps {
  title: string;
  count: number;
}

const Chart: React.FC<BaseStatProps> = ({ baseStat }) => {
  return <Container />;
};

export default Chart;
