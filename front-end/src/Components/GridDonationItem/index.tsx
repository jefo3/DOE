import React from 'react';
import { parseISO, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { AiFillClockCircle, AiFillShopping } from 'react-icons/ai';
import { GoTriangleRight } from 'react-icons/go';

import { motion } from 'framer-motion';
import {
  GridItem, ImageContainer, ItemInfo, Info
} from './styles';

import { IDonate } from '../../Store/Interfaces/donateInterfaces';

interface GridDonationItemProps{
    donate: IDonate;
    clicked: () => void;
}

const GridDonationItem: React.FC<GridDonationItemProps> = ({ donate, clicked }) => {
  const handleConvertTime = (time: any) => {
    const date = parseISO(time);
    const formattedDate = format(date, ' d/LL/y', { locale: ptBR });
    return formattedDate;
  };

  return (
    <GridItem
      onClick={clicked}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25 }}
    >
      <ImageContainer>
        <img src={`http://localhost:3333/files/${donate.image}`} alt="Shirt" />
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
          <span>
            Publicado em
            {' '}
            {handleConvertTime(donate.created_at)}
          </span>
        </Info>
      </ItemInfo>
    </GridItem>
  );
};

export default GridDonationItem;
