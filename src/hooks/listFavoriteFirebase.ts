import { useEffect, useState } from "react";
import firebase from "../config/firebase";

export interface FavoriteProps {
  key: string | null;
  id: string;
  name: string;
}

function useListFavorite(): FavoriteProps[] {
  const [favorites, setFavorites] = useState<FavoriteProps[]>();
  useEffect(() => {
    fetchFavoriteList();
  });

  const fetchFavoriteList = async () => {
    const favorites: FavoriteProps[] = [];
    await firebase
      .database()
      .ref("pokemon")
      .on("value", (snapshot) => {
        snapshot.forEach((item) => {
          const temp: FavoriteProps = {
            key: item.key,
            name: item.val().name,
            id: item.val().id,
          };

          favorites.push(temp);
        });
      });

    setFavorites(favorites);
  };

  return favorites!;
}

export default useListFavorite;
