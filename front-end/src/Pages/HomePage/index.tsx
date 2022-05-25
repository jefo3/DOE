import React, { useEffect, useState } from 'react';

import { FaUserCircle, FaUserAlt, FaSearch } from 'react-icons/fa';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { IoMdHome } from 'react-icons/io';
import { AiFillClockCircle, AiFillPlusCircle, AiFillShopping } from 'react-icons/ai';
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
import { getAllDonates } from '../../Store/Services/donateServices';
import { IDonate } from '../../Store/Interfaces/donateInterfaces';

import { format, parseISO } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const context = useAuth();
  const [donates, setDonates] = useState<Array<IDonate>>();
  
  const retrievingDonates = () => {
    try {
      return getAllDonates().then(response => {
        setDonates(response);
      })
    } catch (error) {
      console.log(error);
    }
  };

  const handleConvertTime = (time: any) => {
    const date = parseISO(time);
    const formattedDate = format(date, ' d/LL/y', { locale: ptBr })
    return formattedDate;
  };

  useEffect(() => {
    retrievingDonates();
  }, []);

  return(
  <Container
    as={motion.div} 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition= {{ delay: 0.25 }}
  >
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
          <NavLink to="/usermanagement">
            <LinkItem>
              <FaUserAlt size="28px" />
              Info de Usuário
            </LinkItem>
          </NavLink>
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
        {
          donates?.map(donate => 
            <GridItem key={donate.id}>
              <ImageContainer>
                <img src={Shirt} alt="Shirt" />
              </ImageContainer>
              <ItemInfo>
              <Info>
                <AiFillShopping size="14px" />
                <span>{donate.title}</span>
              </Info>
              <Info>
                <GoTriangleRight size="14px" />
                <span>{donate.tag.name}</span>
              </Info>
              <Info>
                <AiFillClockCircle size="14px" />
                <span>Publicado {handleConvertTime(donate.created_at)}</span>
              </Info>
            </ItemInfo>
            </GridItem>
          )    
        } 
      </GridWrapper>
    </Content>
  </Container>
)};

export default HomePage;
