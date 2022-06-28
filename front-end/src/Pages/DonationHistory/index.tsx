import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { AiFillWarning } from 'react-icons/ai';
import {
  Container, Content, MainContent, DonationItem
} from './styles';

import NavMenu from '../../Components/NavMenu';
import SidebarMenu from '../../Components/SidebarMenu';

import { IDonate } from '../../Store/Interfaces/donateInterfaces';

import { getAllSuccessfulDonates } from '../../Store/Services/donateServices';

const DonationHistory: React.FC = () => {
  const [donationItems, setDonationItems] = useState<Array<IDonate>>();

  const retrieveDonationItems = async () => {
    const response = await getAllSuccessfulDonates();
    setDonationItems(response);
  };

  const handleConvertingDate = (time: string) => {
    const date = parseISO(time);
    const formattedDate = format(date, ' dd/LL/y', { locale: ptBR });
    return formattedDate;
  };

  useEffect(() => {
    retrieveDonationItems();
  }, []);

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.15 }}
    >
      <NavMenu />
      <Content>
        <SidebarMenu pageActive="donationHistory" />
        <MainContent>
          <h1>Doações realizadas</h1>
          { donationItems?.length === 0
            ? (
              <p>
                <AiFillWarning />
                Nenhuma doação realizada!
              </p>
            )
            : donationItems?.map((item) => (
              <DonationItem key={item.id}>
                <span>{item.title}</span>
                <span>{item.tag.name}</span>
                <span>{handleConvertingDate(item.updated_at)}</span>
              </DonationItem>
            ))}
        </MainContent>
      </Content>
    </Container>
  );
};

export default DonationHistory;
