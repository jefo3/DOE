import React from 'react';
import { parseISO, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { AiFillClockCircle, AiFillShopping } from 'react-icons/ai';
import { GoTriangleRight } from 'react-icons/go';

import {
  GridItem, ImageContainer, ItemInfo, Info
} from './styles';

import { IDonate } from '../../Store/Interfaces/donateInterfaces';

import Shirt from '../../Images/shirt.png';

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
    <GridItem onClick={clicked}>
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
