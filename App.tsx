import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Stack from "./src/navigation/stack";
import { Provider } from "react-redux";
import store from "./src/redux/store";

if (__DEV__) {
  import("./ReactoTron").then(() => console.log("Reactotron Configurado"));
}

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
