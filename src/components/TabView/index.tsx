import React from "react";
import { Route, TabView } from "react-native-tab-view";
import { getDimensions } from "../../utils/deviceUtils";
import {
  ContainerCountReservationLabel,
  ContainerTab,
  CountReservationsLabel,
  TabBar,
  TextTab,
} from "./styles";

const { width } = getDimensions();

interface TabViewProps {
  index: number;
  setIndex: (arg: number) => void;
  renderScene: any;
  routes: Route[];
  scroll?: boolean;
}

const TabViewCustom: React.FC<TabViewProps> = ({
  index,
  setIndex,
  renderScene,
  routes,
  scroll,
}) => {
  const renderTabBar = (props: any) => (
    <TabBar
      renderLabel={({ route }: any) => RenderLabelTabs(route)}
      getLabelText={({ route }: any) => route.title}
      tabsLength={routes.length > 0 ? routes.length : 1}
      scrollEnabled={scroll}
      {...props}
    />
  );

  const RenderLabelTabs = (route: any) => (
    <ContainerTab>
      <TextTab>{route.title}</TextTab>
      {route.count ? (
        <ContainerCountReservationLabel>
          <CountReservationsLabel>{route.count}</CountReservationsLabel>
        </ContainerCountReservationLabel>
      ) : (
        false
      )}
    </ContainerTab>
  );
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width }}
    />
  );
};

export default TabViewCustom;
