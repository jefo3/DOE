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

const HomePage: React.FC = () => (
  <Container>
    <UserMenu>
      <UserInfo>
        <FaUserCircle color="#273B4A" size="22px" />
        <span>Olá, João. Seja bem-vindo!</span>
      </UserInfo>
      <Logout>
        <RiLogoutBoxFill size="30px" color="#273B4A" />
        <span>Log out</span>
      </Logout>
    </UserMenu>
    <Content>
      <NavWrapper>
        <NavLinks>
          <LinkItem>
            <IoMdHome size="32px" />
            <a href="#home">
              Home
            </a>
          </LinkItem>
          <LinkItem>
            <FaUserAlt size="28px" />
            <a href="#info">
              Info de Usuário
            </a>
          </LinkItem>
          <LinkItem>
            <AiFillPlusCircle size="28px" />
            <a href="#newdonation">
              Nova Doação
            </a>
          </LinkItem>
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
);

export default HomePage;
