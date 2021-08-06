import React from "react";

import { Container, Load } from "./styles";

const Loading: React.FC = () => {
  return (
    <Container>
      <Load autoPlay loop />
    </Container>
  );
};

export default Loading;
