import React from 'react';

import { AiFillHome, AiFillPlusCircle } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';

import { Container, Item } from './styles';

const NavMenu = () => (
  <Container>
    <Item>
      <AiFillHome size="28px" />
      <a href="#home">Home</a>
    </Item>
    <Item>
      <FaUserAlt size="28px" />
      <a href="#home">Info de Usuário</a>
    </Item>
    <Item>
      <AiFillPlusCircle size="28px" />
      <a href="#home">Nova doação</a>
    </Item>
  </Container>
);

export default NavMenu;
