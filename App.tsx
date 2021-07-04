import React from "react";
import { View } from "react-native";

if (__DEV__) {
  import("./ReactoTron").then(() => console.log("Reactotron Configurado"));
}

const App: React.FC = () => {
  return <View />;
};

export default App;
