import { MaterialIcons } from "@expo/vector-icons";
import SvgUri from "react-native-svg-uri";
import styled from "styled-components/native";
import { theme } from "./../../../global/theme/theme";

export const Container = styled.View``;

export const Content = styled.TouchableOpacity`
  padding: 10px 10px;
  background-color: ${theme.colors.secondary};
  margin: 10px 15px;
  border-radius: 15px;
  flex-direction: row;
`;

export const PokemonImageContainer = styled.View``;

export const TitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 15px;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
`;
export const Title = styled.Text`
  font-size: 26px;
  font-family: ${theme.fonts.text700};
  color: ${theme.colors.heading};
`;

export const LikeContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
export const LikeIcon = styled(MaterialIcons).attrs({
  name: "favorite-border",
  color: theme.colors.primary,
  size: 35,
})``;

export const PokemonImage = styled(SvgUri)``;
