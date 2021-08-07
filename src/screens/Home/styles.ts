import { theme } from "./../../global/theme/theme";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.primary};
  padding: 30px 0; ;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 20px 0;
`;

export const Title = styled.Text``;

export const PokemonList = styled.FlatList``;
