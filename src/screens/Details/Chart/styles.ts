import { View } from "react-native";
import { theme } from "../../../global/theme/theme";
import styled from "styled-components/native";
import { factoryChartColor } from "./model";

export const Container = styled.View`
  flex: 1;
  margin-top: 20px;
  background-color: ${theme.colors.secondary};
  border-radius: 10px;
  padding: 10px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: green;
  flex-direction: row;
  padding: 15px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  flex-direction: row;
  padding: 0 10px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 14px;
`;
export const Count = styled.Text`
  font-family: ${theme.fonts.text500};
  font-size: 14px;
  margin-left: 10px;
  color: ${(props) => (props.count ? props.count.bg : "#000")};
`;

export const ChartContainer = styled.View`
  flex: 4;
  height: 12px;
  background-color: #eddfdf;
  margin: 5px 0;
  border-radius: 6px;
  justify-content: center;
`;

export const ChartColor = styled.View`
  background-color: ${(props) => props.count.bg};
  width: ${(props) => props.count.pixel + "px"};
  height: 12px;
  margin: 5px 0;
  border-radius: 6px;
`;

export const Chart = styled.View;

export const ChartView = styled.View`
  flex-direction: row;
  padding: 0 10px;
`;

export const TotalContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  flex-direction: row;
  padding-left: 22px;
`;
