import { theme } from "./../../../global/theme/theme";
import { View } from "react-native";
import styled from "styled-components/native";

import SvgUri from "react-native-svg-uri";

export const Container = styled.View``;

export const Content = styled.TouchableOpacity`
  padding: 10px 10px;
  background-color: ${theme.colors.heading};
  margin: 10px 15px;
  width: 80%;
  border-radius: 15px;
  flex-direction: row;
  justify-content: space-around;
`;

export const PokemonImageContainer = styled.View`
  background-color: green;
`;

export const TitleContainer = styled.View`
  justify-content: center;
  margin-left: 15px;
`;
export const Title = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.text700};
  color: ${theme.colors.primary};
`;
export const BadgeTitle = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.secondary};
  font-size: 16px;
`;
export const Badge = styled.View`
  background-color: green;
  width: 86px;
  height: 22px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;
export const BadgeContainer = styled.View`
  justify-content: center;
  margin-left: 10px;
`;
export const PokemonImage = styled(SvgUri)``;
