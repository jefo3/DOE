/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as yup from 'yup';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Container, Content, InputField
} from './styles';

import NavMenu from '../../Components/NavMenu';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

import { ICreatDonate } from '../../Store/Interfaces/donateInterfaces';
import { createDonate } from '../../Store/Services/donateServices';

import { useAuth } from '../../Store/Context/authContext';

import { ITag } from '../../Store/Interfaces/tagsInterface';
import getTags from '../../Store/Services/tagsServices';

const schema = yup.object().shape({
  name: yup.string().required('Nome é um campo obrigatório'),
  description: yup.string().required('Descrição é um campo obrigatório')
});

const NewDonationPage: React.FC = () => {
  const { user } = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate();
  const [tags, setTags] = useState<Array<ITag>>();
  const [category, setCategory] = useState<string>('');

  const handleRegisterDonate = (data: any) => {
    const donate: ICreatDonate = {
      title: data.name,
      description: data.description,
      user_id: user?.id as string,
      tag_id: category
    };

    createDonate(donate).then((response) => {
      if (response) {
        navigate('/usermanagement');
        alert('Cadastrado com sucesso');
      }
    }).catch(() => {
      alert('Não foi possível cadastrar');
    });
  };

  const retrieveTags = () => getTags().then((response) => {
    setTags(response);
  });

  useEffect(() => {
    retrieveTags();
  }, []);

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
        <h1>Nova Doação</h1>
        <form autoComplete="off" onSubmit={handleSubmit(handleRegisterDonate)}>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecionar categoria</option>
            {
              tags?.map((tag) => (
                <option key={tag.id} value={tag.id}>{tag.name}</option>
              ))
            }
          </select>
          <InputField>
            <label htmlFor="name">Nome</label>
            <Input
              name="name"
              type="text"
              register={register}
            />
            <small>{errors.name?.message as string}</small>
          </InputField>
          <InputField>
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('description', { required: true })}
            />
            <small>{errors.description?.message as string}</small>
          </InputField>
          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
};

export default NewDonationPage;
