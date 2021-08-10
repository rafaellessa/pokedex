import { PokemonFactory } from "../data/services/pokemon/types";
import { NODE_DATABASE_FIREBASE } from "./constants";
import firebase from "../config/firebase";

export interface FavoriteProps {
  key: string;
  id: string;
  name: string;
}

const getInstanceFirebase = async () => {
  return await firebase.database().ref(NODE_DATABASE_FIREBASE);
};

export const addFavorite = async (item: PokemonFactory) => {
  if (item.id !== "" && item.name !== "") {
    const pokemons = await getInstanceFirebase();
    const key = await pokemons.push().key;
    await pokemons.child(key!).set({
      id: item.id,
      name: item.name,
    });
  }
};

export const getFavoriteList = async (): Promise<FavoriteProps[]> => {
  const parsedFavorites: FavoriteProps[] = [];
  const favorites = await getInstanceFirebase();
  favorites.on("value", (snapshot) => {
    snapshot.forEach((item) => {
      const temp: FavoriteProps = {
        key: item.key!,
        name: item.val().name,
        id: item.val().id,
      };

      parsedFavorites.push(temp);
    });
  });

  return parsedFavorites;
};

export const removeFavorite = async (id: string) => {
  if (id !== "") {
    const favorites = await getFavoriteList();
    const favoriteRemove = favorites.find((item) => item.id === id);

    if (favoriteRemove) {
      const instance = await getInstanceFirebase();
      await instance.child(favoriteRemove?.key).remove();
    }
  }
};
