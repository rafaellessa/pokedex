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
  onSearchPress?: () => void;
}

const HeaderSearch: React.FC<HeaderSearchProps> = ({
  onSearch,
  search,
  title,
  onSearchPress,
}) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <IconContainer onPress={onSearchPress}>
        <SearchIcon />
      </IconContainer>
    </Container>
  );
};

export default HeaderSearch;
