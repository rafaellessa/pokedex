import { View } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../../global/theme/theme";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.secondary100};
  width: 100%;
  border-radius: 20px;
  margin-top: 10px;
`;

export const FooterContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
export const ButtonLikeContainer = styled.TouchableOpacity`
  flex-direction: row;
  background-color: red;
  width: 60%;
  height: 55px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
export const ButtonLikeTitle = styled.Text`
  font-family: ${theme.fonts.title700};
  font-size: 24px;
  color: ${theme.colors.secondary};
`;

export const LikeIcon = styled(MaterialIcons).attrs({
  name: "favorite-border",
  color: theme.colors.secondary,
  size: 35,
})`
  margin-left: 10px;
`;
