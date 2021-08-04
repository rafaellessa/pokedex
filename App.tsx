import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Stack from "./src/navigation/stack";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

import {
  Rajdhani_400Regular,
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";

if (__DEV__) {
  import("./ReactoTron").then(() => console.log("Reactotron Configurado"));
}

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Rajdhani_400Regular,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
