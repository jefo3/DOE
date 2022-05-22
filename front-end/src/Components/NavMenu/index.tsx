import React from 'react';

import { AiFillHome, AiFillPlusCircle } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import { Container, Item } from './styles';

const NavMenu = () => (
  <Container>
    <NavLink to="/">
      <Item>
        <AiFillHome size="28px" />
        <a href="#home">Home</a>
      </Item>
    </NavLink>

    <Item>
      <FaUserAlt size="28px" />
      <a href="#home">Info de Usuário</a>
    </Item>

    <NavLink to="/newdonation">
      <Item>
        <AiFillPlusCircle size="28px" />
        <a href="#home">Nova doação</a>
      </Item>
    </NavLink>
  </Container>
);

export default NavMenu;
