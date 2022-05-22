import React from 'react';

import { FaUserCircle, FaUserAlt, FaSearch } from 'react-icons/fa';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { IoMdHome } from 'react-icons/io';
import { AiFillPlusCircle, AiFillShopping } from 'react-icons/ai';
import { GoTriangleRight } from 'react-icons/go';

import {
  Container, UserInfo, Logout, Content, NavWrapper,
  UserMenu, GridWrapper, GridItem, ItemInfo, Info,
  ImageContainer, NavLinks, LinkItem,
} from './styles';

import Input from '../../Components/Input';

import Shirt from '../../Images/shirt.png';
import { useAuth } from '../../Store/Context/authContext';
import { NavLink } from 'react-router-dom';

const HomePage: React.FC = () => {
  const context = useAuth();
  
  return(
  <Container>
    <UserMenu>
      <UserInfo>
        <FaUserCircle color="#273B4A" size="22px" />
        <span>Olá, {context.user?.name}. Seja bem-vindo(a)!</span>
      </UserInfo>
      <Logout onClick={() => context.LogOut()}>
        <RiLogoutBoxFill size="30px" color="#273B4A" />
        <span>Log out</span>
      </Logout>
    </UserMenu>
    <Content>
      <NavWrapper>
        <NavLinks>
        <NavLink to="/">
          <LinkItem>
            <IoMdHome size="32px" />
              Home
          </LinkItem>
          </NavLink>

          <LinkItem>
            <FaUserAlt size="28px" />
            <a href="#info">
              Info de Usuário
            </a>
          </LinkItem>
          <NavLink to="/newdonation">
          <LinkItem>
            <AiFillPlusCircle size="28px" />
              Nova Doação
          </LinkItem>
          </NavLink>
        </NavLinks>
        <form autoComplete="off">
          <Input
            leftIcon={FaSearch}
            placeholder="Buscar objeto, bens..."
            type="text"
            name="search"
          />
        </form>
      </NavWrapper>
      <GridWrapper>
        <GridItem>
          <ImageContainer>
            <img src={Shirt} alt="Shirt" />
          </ImageContainer>
          <ItemInfo>
            <Info>
              <AiFillShopping size="14px" />
              <span>Camisa polo masculina</span>
            </Info>
            <Info>
              <GoTriangleRight size="14px" />
              <span>Roupas</span>
            </Info>
          </ItemInfo>
        </GridItem>
        <GridItem>
          <ImageContainer>
            <img src={Shirt} alt="Shirt" />
          </ImageContainer>
          <ItemInfo>
            <Info>
              <AiFillShopping size="14px" />
              <span>Camisa polo masculina</span>
            </Info>
            <Info>
              <GoTriangleRight size="14px" />
              <span>Roupas</span>
            </Info>
          </ItemInfo>
        </GridItem>
        <GridItem>
          <ImageContainer>
            <img src={Shirt} alt="Shirt" />
          </ImageContainer>
          <ItemInfo>
            <Info>
              <AiFillShopping size="14px" />
              <span>Camisa polo masculina</span>
            </Info>
            <Info>
              <GoTriangleRight size="14px" />
              <span>Roupas</span>
            </Info>
          </ItemInfo>
        </GridItem>
        <GridItem>
          <ImageContainer>
            <img src={Shirt} alt="Shirt" />
          </ImageContainer>
          <ItemInfo>
            <Info>
              <AiFillShopping size="14px" />
              <span>Camisa polo masculina</span>
            </Info>
            <Info>
              <GoTriangleRight size="14px" />
              <span>Roupas</span>
            </Info>
          </ItemInfo>
        </GridItem>
        <GridItem>
          <ImageContainer>
            <img src={Shirt} alt="Shirt" />
          </ImageContainer>
          <ItemInfo>
            <Info>
              <AiFillShopping size="14px" />
              <span>Camisa polo masculina</span>
            </Info>
            <Info>
              <GoTriangleRight size="14px" />
              <span>Roupas</span>
            </Info>
          </ItemInfo>
        </GridItem>
        <GridItem>
          <ImageContainer>
            <img src={Shirt} alt="Shirt" />
          </ImageContainer>
          <ItemInfo>
            <Info>
              <AiFillShopping size="14px" />
              <span>Camisa polo masculina</span>
            </Info>
            <Info>
              <GoTriangleRight size="14px" />
              <span>Roupas</span>
            </Info>
          </ItemInfo>
        </GridItem>
      </GridWrapper>
    </Content>
  </Container>
)};

export default HomePage;
