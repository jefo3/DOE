import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { motion } from 'framer-motion';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import {
  Container, Content, ImageContainer, ItemInfoContainer, MainContent
} from './styles';

import NavMenu from '../../Components/NavMenu';

import { IDonate } from '../../Store/Interfaces/donateInterfaces';
import { getUserById } from '../../Store/Services/userServices';
import { IUser } from '../../Store/Interfaces/userInterfaces';

const ExpandedItemPage: React.FC = () => {
  const location = useLocation();
  const donateItem = location.state as IDonate;
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    if (donateItem && donateItem.user_id) {
      const id = donateItem.user_id;
      getUserById(id).then((response) => {
        setUser(response);
      });
    }
  }, [donateItem]);

  const handleConvertTime = (time: any) => {
    const date = parseISO(time);
    const formattedDate = format(date, ' d/LL/y', { locale: ptBR });
    return formattedDate;
  };

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25 }}
    >
      <NavMenu />
      <Content>
        <MainContent>
          <ImageContainer>
            <img src={`http://localhost:3333/files/${donateItem.image}`} alt="A shirt" />
          </ImageContainer>
          <ItemInfoContainer>
            <h1>{donateItem.title}</h1>
            <p>{donateItem.description}</p>
            <span>{handleConvertTime(donateItem.created_at)}</span>
            {user && <a href={`mailto:${user.email}?subject='Olá, ${user.name} tenho interesse nessa doação!'`}>Entrar em contato</a>}
          </ItemInfoContainer>
        </MainContent>
      </Content>
    </Container>
  );
};

export default ExpandedItemPage;
