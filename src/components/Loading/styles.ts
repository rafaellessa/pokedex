import { theme } from "./../../global/theme/theme";
import styled from "styled-components/native";
import Lottie from "lottie-react-native";
import Pokeball from "../../assets/pokeball.json";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
`;

export const Load = styled(Lottie).attrs({
  source: Pokeball,
})`
  background-color: transparent;
  width: 200px;
  height: 200px;
`;
