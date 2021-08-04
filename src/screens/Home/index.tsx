import React from "react";

import { Container, Title } from "./styles";
import HeaderSearch from "../../components/HeaderSearch";
import { useEffect } from "react";
import PokemonService from "../../data/services/pokemon/index";
import { PokemonActions } from "../../redux/reducers/reducer.pokemon";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/selectors/selector.pokemon";

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
