import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { FaUserCircle, FaUserAlt, FaSearch } from 'react-icons/fa';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { IoMdHome } from 'react-icons/io';
import { AiFillPlusCircle } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';

import { motion } from 'framer-motion';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Container, UserInfo, Logout, Content, NavWrapper,
  UserMenu, GridWrapper, NavLinks, LinkItem
} from './styles';

import Input from '../../Components/Input';

import { useAuth } from '../../Store/Context/authContext';
import { getAllDonates, getDonatesByTags, getDonatesByTitle } from '../../Store/Services/donateServices';
import getTags from '../../Store/Services/tagsServices';

import { IDonate } from '../../Store/Interfaces/donateInterfaces';
import { ITag } from '../../Store/Interfaces/tagsInterface';
import GridDonationItem from '../../Components/GridDonationItem';

const schema = yup.object().shape({
  search: yup.string()
});

const HomePage: React.FC = () => {
  const context = useAuth();
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  const [donates, setDonates] = useState<Array<IDonate>>();
  const [tags, setTags] = useState<Array<ITag>>();
  const [noItems, setNoItems] = useState(false);

  const navigate = useNavigate();

  const retrievingDonates = async () => {
    try {
      const response = await getAllDonates();
      setDonates(response);
    } catch (error) {
      console.error(error);
    }
  };

  const retrievingTags = async () => {
    const response = await getTags();
    setTags(response);
  };

  const handleSelectOnChange = async (e: any) => {
    e.preventDefault();
    if (e.target.value === 'all') {
      retrievingDonates();
      setNoItems(false);
    } else {
      const tagId = e.target.value;
      const response = await getDonatesByTags(tagId);
      if (response.length === 0) {
        setNoItems(true);
      } else {
        setNoItems(false);
      }

      setDonates(response);
    }
  };

  const handleOnClickItem = (donateItem: IDonate) => {
    navigate('/expandeditem', { state: donateItem });
  };

  const handleSearchSubmit = async (data: any) => {
    const response = await getDonatesByTitle(data.search);
    setDonates(response);
  };

  useEffect(() => {
    retrievingDonates();
    retrievingTags();
  }, []);

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25 }}
    >
      <UserMenu>
        <UserInfo>
          <FaUserCircle color="#273B4A" size="22px" />
          <span>
            Olá,
            {' '}
            {context.user?.name}
            . Seja bem-vindo(a)!
          </span>
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
          <form autoComplete="off" onSubmit={handleSubmit(handleSearchSubmit)}>
            <Input
              name="search"
              type="text"
              placeholder="Buscar objeto, bens..."
              leftIcon={FaSearch}
              register={register}
            />
          </form>
        </NavWrapper>
        <GridWrapper noItems={noItems}>
          <select onChange={handleSelectOnChange}>
            <option value="all">Mostrar todos</option>
            {tags?.map((tag) => (
              <option key={tag.id} value={tag.id}>{tag.name}</option>
            ))}
          </select>
          {noItems ? (
            <p>
              <BiErrorCircle />
              {' '}
              Nenhum item encontrado
            </p>
          )
            : donates?.map((donate) => (
              <GridDonationItem
                clicked={() => handleOnClickItem(donate)}
                key={donate.id}
                donate={donate}
              />
            ))}
        </GridWrapper>
      </Content>
    </Container>
  );
};

export default HomePage;
