import React from "react";

import { Container, Title } from "./styles";
import HeaderSearch from "../../components/HeaderSearch";
import { useEffect } from "react";
import PokemonService from "../../data/services/pokemon/index";

const Home: React.FC = () => {
  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    const response = await PokemonService.getAllPokemons();
    console.tron.log("Response: ", response);
  };

  return (
    <Container>
      <HeaderSearch title="Pokemon List" />
    </Container>
  );
};

export default Home;
