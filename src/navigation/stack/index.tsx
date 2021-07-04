import React, { FunctionComponent } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../../screens/Home";

interface RootRouteScreens {
  name: string;
  component: FunctionComponent<any>;
}

export const navigations: RootRouteScreens[] = [
  {
    name: "Home",
    component: Home,
  },
];

const Navigation: React.FC = () => {
  const Stack = createStackNavigator();

  const renderNavigations = navigations.map(
    ({ name, component: Component }) => {
      return (
        <Stack.Screen key={name} name={name}>
          {(props) => <Component key={name} {...props} />}
        </Stack.Screen>
      );
    }
  );

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}
    >
      {renderNavigations}
    </Stack.Navigator>
  );
};

export default Navigation;
