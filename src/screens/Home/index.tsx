import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderSearch from "../../components/HeaderSearch";
import { PokemonActions } from "../../redux/reducers/reducer.pokemon";
import { getPokemons } from "../../redux/selectors/selector.pokemon";
import { Container } from "./styles";


const Home: React.FC = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector(getPokemons);
  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    console.tron.log("Pokemons no Selector: ", pokemons);
  }, [pokemons]);

  const fetchPokemons = async () => {
    dispatch(PokemonActions.pokedexRequestGetAllPokemon());
  };

  return (
    <Container>
      <HeaderSearch title="Pokemon List" />
    </Container>
  );
};

export default Home;
