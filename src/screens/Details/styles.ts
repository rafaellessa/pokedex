import { theme } from "./../../global/theme/theme";
import { Platform, View } from "react-native";
import styled from "styled-components/native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import SvgUri from "react-native-svg-uri";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.primary};
  padding-top: ${Platform.OS === "android" ? 45 + "px" : 0 + "px"};
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 0 15px;
  align-items: center;
`;
export const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const HeaderTitle = styled.Text`
  font-size: 30px;
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.secondary};
`;
export const IconContainer = styled.TouchableOpacity``;
export const ArrowIcon = styled(FontAwesome5).attrs({
  name: "arrow-left",
  color: theme.colors.secondary,
  size: 30,
})``;

export const PokemonImage = styled(SvgUri)``;
export const PokemonImageContainer = styled.View`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.View`
  flex: 1;
`;

export const LikeContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
export const LikeIcon = styled(MaterialIcons).attrs({
  color: theme.colors.secondary,
  size: 35,
})``;
