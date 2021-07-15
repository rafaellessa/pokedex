import { View } from "react-native";
import { theme } from "./../../global/theme/theme";
import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

export const Container = styled.View`
  padding: 20px;
  background-color: ${theme.colors.primary};
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const IconContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
`;

export const SearchIcon = styled(FontAwesome5).attrs({
  name: "search",
  color: theme.colors.secondary100,
  size: 25,
})``;
