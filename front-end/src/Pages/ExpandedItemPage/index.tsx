import React from 'react';
import { useLocation } from 'react-router-dom';

import { motion } from 'framer-motion';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import {
  Container, Content, ImageContainer, ItemInfoContainer, MainContent
} from './styles';

import Shirt from '../../Images/shirt.png';
import Button from '../../Components/Button';

import { IDonate } from '../../Store/Interfaces/donateInterfaces';

const ExpandedItemPage: React.FC = () => {
  const location = useLocation();
  const donateItem = location.state as IDonate;

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
      <Content>
        <MainContent>
          <ImageContainer>
            <img src={Shirt} alt="A shirt" />
          </ImageContainer>
          <ItemInfoContainer>
            <h1>{donateItem.title}</h1>
            <p>{donateItem.description}</p>
            <span>{handleConvertTime(donateItem.created_at)}</span>
            <Button>Entrar em contato</Button>
          </ItemInfoContainer>
        </MainContent>
      </Content>
    </Container>
  );
};

export default ExpandedItemPage;
