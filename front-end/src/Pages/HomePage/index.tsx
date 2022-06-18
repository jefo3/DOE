import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';
import { BiErrorCircle } from 'react-icons/bi';

import {
  Container, NavWrapper, GridWrapper,
} from './styles';

import Input from '../../Components/Input';

import { useAuth } from '../../Store/Context/authContext';
import { getAllDonates, getDonatesByTags } from '../../Store/Services/donateServices';
import { getTags } from '../../Store/Services/tagsServices';

import * as yup from 'yup';

import { IDonate } from '../../Store/Interfaces/donateInterfaces';
import { ITag } from '../../Store/Interfaces/tagsInterface';
import GridDonationItem from '../../Components/GridDonationItem';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  search: yup.string(),
})

const HomePage: React.FC = () => {
  const context = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  })

  const [donates, setDonates] = useState<Array<IDonate>>();
  const [tags, setTags] = useState<Array<ITag>>();
  const [noItems, setNoItems] = useState(false);

  let navigate = useNavigate();

  const retrievingDonates = () => {
    try {
      return getAllDonates().then(response => {
        setDonates(response);
      })
    } catch (error) {
      console.log(error);
    }
  };

  const retrievingTags = async () => {
    const response = await getTags();
    setTags(response);
  }

  const handleSelectOnChange = async (e: any) => {
    e.preventDefault();

    if (e.target.value === 'all') {
      retrievingDonates();
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

  }

  const handleOnClickItem = (donateItem: IDonate) => {
    navigate('/expandeditem', { state: donateItem });
  }

  useEffect(() => {
    retrievingDonates();
    retrievingTags();
  }, []);

  return (
    <Container>
      <NavWrapper>
        <form autoComplete="off">
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
          {tags?.map(tag => (
            <option key={tag.id} value={tag.id}>{tag.name}</option>
          ))}
        </select>
        {noItems ? <p><BiErrorCircle /> Nenhum item encontrado</p>
          : donates?.map(donate => <GridDonationItem clicked={() => handleOnClickItem(donate)} key={donate.id} donate={donate} />)}
      </GridWrapper>
    </Container>
  )
};

export default HomePage;
