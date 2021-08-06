import { TabBar as RNTabBar } from "react-native-tab-view";
import styled from "styled-components/native";
import { getDimensions } from "../../utils/deviceUtils";
import { theme } from "./../../global/theme/theme";

export const Container = styled.View``;

interface TabBarProps {
  tabsLength: number;
}

export interface StyledPropTypes {
  focused?: boolean;
  removeBorder?: boolean;
}

const { width } = getDimensions();
export const TabBar = styled(RNTabBar).attrs(({ tabsLength }: TabBarProps) => ({
  indicatorStyle: {
    backgroundColor: "#FFE100",
    height: 5,
    width: Math.round(width / tabsLength) - 32,
    marginLeft: tabsLength === 12 ? 10 : 16,
    borderRadius: 10,
  },
  tabStyle: {
    width: Math.round(width / tabsLength),
  },
}))`
  background-color: ${theme.colors.secondary};
  elevation: 0;
  height: 50px;
`;

export const TextTab = styled.Text`
  font-family: ${({ focused }: StyledPropTypes) =>
    focused ? theme.fonts.title700 : theme.fonts.text400};
  font-size: 18px;
`;

export const ContainerTab = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerCountReservationLabel = styled.View`
  flex-direction: row;
  background-color: ${theme.colors.primary};
  margin-left: 15px;
  justify-content: center;
  align-items: center;
  width: 25px;
  border-radius: 15px;
`;

export const CountReservationsLabel = styled.Text`
  font-size: 12px;
  color: ${theme.colors.secondary};
  font-family: ${theme.fonts.text700};
  line-height: 15px;
`;
