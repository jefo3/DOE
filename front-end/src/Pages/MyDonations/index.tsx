import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { AiFillPlusCircle, AiFillWarning } from 'react-icons/ai';
import {
  Container, Content, MainContent
} from './styles';

import { IDonate } from '../../Store/Interfaces/donateInterfaces';

import MyDonationItem from '../../Components/MyDonationItem';
import { Link } from 'react-router-dom';

const DonationHistory: React.FC = () => {
  const [donationItems, setDonationItems] = useState<Array<IDonate>>([{
    id: "string",
    tag: {
      name: "string",
    },
    created_at: "string",
    updated_at: "string",
    status_donate: "em_andamento",
    title: "string",
    description: "string",
    user_id: "string",
  },]);

  // const retrieveDonationItems = async () => {
  //   const response = await getAllSuccessfulDonates();
  //   setDonationItems(response);
  // };

  const handleConvertingDate = (time: string) => {
    const date = parseISO(time);
    const formattedDate = format(date, ' dd/LL/y', { locale: ptBR });
    return formattedDate;
  };

  useEffect(() => {
    // retrieveDonationItems();
  }, []);

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.15 }}
    >
      <Content>
        <MainContent>
          <Link to='/newdonation'>
            <h4 style={{ textAlign: "right" }}>Adicionar uma doação <AiFillPlusCircle size="28px" /></h4>
          </Link>
          <b>Doações em andamento</b>
          {donationItems.length === 0
            ? (
              <p>
                <AiFillWarning />
                Nenhuma doação realizada!
              </p>
            )
            : <MyDonationItem donates={donationItems} />}

          <br />
          <b>Doações finalizadas</b>
          {donationItems.length === 0
            ? (
              <p>
                <AiFillWarning />
                Nenhuma doação realizada!
              </p>
            )
            : <MyDonationItem donates={donationItems} />}
        </MainContent>

      </Content>
    </Container>
  );
};

export default DonationHistory;
