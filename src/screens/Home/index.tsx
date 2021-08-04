import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderSearch from "../../components/HeaderSearch";
import { PokemonActions } from "../../redux/reducers/reducer.pokemon";
import { getPokemons } from "../../redux/selectors/selector.pokemon";
import { Container, PokemonList } from "./styles";
import ListItem from "./ListItem";
import { PokemonFactory } from "~/data/services/pokemon/types";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector(getPokemons);
  useEffect(() => {
    console.tron.log("Aqui");
    fetchPokemons();
  }, []);

  useEffect(() => {
    console.tron.log("Pokemons no Selector: ", pokemons);
  }, [pokemons]);

  const fetchPokemons = async () => {
    dispatch(PokemonActions.pokedexRequestGetAllPokemon());
  };

  const renderItem = ({ item }) => (
    <ListItem name={item.name} id={item.id} image={item.image} />
  );

  return (
    <Container>
      <HeaderSearch title="Pokemon List" />
      <PokemonList
        data={pokemons}
        renderItem={renderItem}
        keyExtractor={(item: PokemonFactory) => String(item.name)}
      />
    </Container>
  );
};

export default Home;
