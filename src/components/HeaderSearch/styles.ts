import { FontAwesome5 } from "@expo/vector-icons";
import styled from "styled-components/native";
import { theme } from "./../../global/theme/theme";

export const Container = styled.View`
  padding: 20px;
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
  font-size: 26px;
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.secondary};
`;

export const SearchIcon = styled(FontAwesome5).attrs({
  name: "search",
  color: theme.colors.secondary,
  size: 25,
})``;
