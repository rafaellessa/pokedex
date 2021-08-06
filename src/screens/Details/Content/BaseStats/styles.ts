import styled from "styled-components/native";
import { theme } from "./../../../../global/theme/theme";

export const Container = styled.View`
  flex: 1;
  padding: 0 15px;
`;
export const TitleContainer = styled.View`
  margin-top: 10px;
  padding: 0 15px;
  background-color: ${theme.colors.secondary};
  max-width: 80%;
  border-radius: 40px;
`;
export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  font-size: 36px;
  color: ${theme.colors.primary};
`;

export const ChildrenContainer = styled.View`
  flex: 1;
  margin: 10px 0;
`;
