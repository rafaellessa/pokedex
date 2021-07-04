import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Stack from "./src/navigation/stack";

if (__DEV__) {
  import("./ReactoTron").then(() => console.log("Reactotron Configurado"));
}

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default App;
