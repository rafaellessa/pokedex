import React from "react";

import {
  Container,
  Title,
  SearchIcon,
  TitleContainer,
  IconContainer,
} from "./styles";

interface HeaderSearchProps {
  onSearch?: boolean;
  search?: string;
  title: string;
}

const HeaderSearch: React.FC<HeaderSearchProps> = ({
  onSearch,
  search,
  title,
}) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <IconContainer>
        <SearchIcon />
      </IconContainer>
    </Container>
  );
};

export default HeaderSearch;
