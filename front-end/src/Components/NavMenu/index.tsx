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
        <span>Home</span>
      </Item>
    </NavLink>

    <NavLink to="/usermanagement">
      <Item>
        <FaUserAlt size="28px" />
        <span>Info de Usuário</span>
      </Item>
    </NavLink>

    <NavLink to="/newdonation">
      <Item>
        <AiFillPlusCircle size="28px" />
        <span>Nova doação</span>
      </Item>
    </NavLink>
  </Container>
);

export default NavMenu;
