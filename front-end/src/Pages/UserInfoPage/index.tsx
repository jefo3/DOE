import React from 'react';
import { motion } from 'framer-motion';
import * as yup from 'yup';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Container, Content, InputField, MainContent
} from './styles';

import NavMenu from '../../Components/NavMenu';
import SidebarMenu from '../../Components/SidebarMenu';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

import { useAuth } from '../../Store/Context/authContext';
import { updateUser } from '../../Store/Services/userServices';

const schema = yup.object().shape({
  name: yup.string(),
  surname: yup.string(),
  email: yup.string().email('Precisa ser um email válido')
});

const UserInfoPage: React.FC = () => {
  const { user } = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const handleOnSubmit = async (data: any) => {
    const response = await updateUser(user?.id as string, data.name, data.surname);
    localStorage.setItem('@App:user', JSON.stringify(response));
    document.location.reload();
  };

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
        <SidebarMenu pageActive="userInfo" />
        <MainContent>
          <h1>Informações do usuário</h1>
          <span>
            {user?.name}
            {' '}
            {user?.surname}
          </span>
          <form autoComplete="off" onSubmit={handleSubmit(handleOnSubmit)}>
            <InputField>
              <label htmlFor="name">Nome</label>
              <Input
                name="name"
                type="text"
                defaultValue={user?.name}
                register={register}
              />
              <small>{errors.name?.message as string}</small>
            </InputField>
            <InputField>
              <label htmlFor="surname">Sobrenome</label>
              <Input
                name="surname"
                type="text"
                defaultValue={user?.surname}
                register={register}
              />
              <small>{errors.surname?.message as string}</small>
            </InputField>
            <InputField>
              <label htmlFor="email">Email</label>
              <Input
                name="email"
                type="email"
                defaultValue={user?.email}
                register={register}
              />
              <small>{errors.email?.message as string}</small>
            </InputField>
            <Button type="submit">Salvar alterações</Button>
          </form>
        </MainContent>
      </Content>
    </Container>
  );
};

export default UserInfoPage;
