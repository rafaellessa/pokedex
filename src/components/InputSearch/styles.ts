import { Feather } from "@expo/vector-icons";
import { Animated, Dimensions } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../global/theme/theme";

export const { width } = Dimensions.get("window");

interface StyledProps {
  expanded?: boolean;
}

let searchIconMargin = 2;
if (width < 380) searchIconMargin = -8;
if (width < 330) searchIconMargin = -18;

export const Container = styled.View<StyledProps>`
  width: 100%;
  height: 40px;
  justify-content: center;
  background: ${theme.colors.secondary};
  border-radius: 10px;
`;

export const Input = styled.TextInput.attrs(({ expanded }: StyledProps) => ({
  placeholderTextColor: expanded
    ? theme.colors.secondary100
    : theme.colors.secondary90,
}))`
  height: 40px;
  width: 80%;
  color: ${theme.colors.primary};
  font-size: 18px;
  align-self: center;
  padding: 0 8px 0 8px;
  text-align: center;
  font-family: ${theme.fonts.text500};
`;

export const IconContainer = styled(Animated.View)`
  position: absolute;
  top: 10px;
`;

export const SearchIcon = styled(Feather).attrs({
  name: "search",
  color: theme.colors.primary,
  size: 20,
})``;

export const BackIcon = styled(Feather).attrs({
  name: "chevron-left",
  color: theme.colors.primary,
  size: 24,
})`
  margin-top: -3px;
`;

export const IconButton = styled.TouchableOpacity``;

export const CloseIcon = styled(Feather).attrs({
  name: "x",
  color: theme.colors.primary,
  size: 20,
})`
  margin-top: -3px;
`;
