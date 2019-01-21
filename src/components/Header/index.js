import React from 'react';
import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search..." />
    </Search>

    <User>
      <img src="https://placeimg.com/48/48/tech" alt="User avatar" />
      User Name
    </User>
  </Container>
);

export default Header;
