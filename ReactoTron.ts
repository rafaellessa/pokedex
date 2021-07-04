import { NativeModules } from "react-native";
import Reactotron from "reactotron-react-native";

declare global {
  interface Console {
    tron: typeof Reactotron;
  }
}

let tron: typeof Reactotron = Reactotron;

if (__DEV__) {
  tron = Reactotron.configure({
    name: "Pokedex",
    host: NativeModules.SourceCode.scriptURL.split("://")[1].split(":")[0],
  }).connect();

  tron.clear!();

  console.tron = tron;
}

export default tron;
