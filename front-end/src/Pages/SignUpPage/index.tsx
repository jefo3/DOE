import React from 'react';
import { NavLink } from 'react-router-dom';

import { motion } from 'framer-motion';
import * as yup from 'yup';

import { BiArrowBack } from 'react-icons/bi';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../Store/Context/authContext';
import { ICreateUser } from '../../Store/Interfaces/userInterfaces';
import { createUser } from '../../Store/Services/userServices';

import Button from '../../Components/Button';
import Input from '../../Components/Input';

import {
  Container, BackgroundImage, Form, DoubleFields, InputField
} from './styles';

const schema = yup.object().shape({
  firstName: yup.string().required('Nome é um campo obrigatório'),
  lastName: yup.string().required('Sobrenome é um campo obrigatório'),
  email: yup.string().email('Digite um email válido').required('Email é um campo obrigatório'),
  password: yup.string().required('Senha é um campo obrigatório'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]).required('Repita sua senha')
});

const SignUpPage: React.FC = () => {
  const context = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const handleRegister = (data: any) => {
    const user: ICreateUser = {
      name: data.firstName,
      surname: data.lastName,
      email: data.email,
      password: data.password
    };

    createUser(user).then((response) => {
      if (response) {
        context.Login(data.email, data.password);
      }
    }).catch((error) => {
      console.log(`Erro ao fazer Login${error}`);
    });
  };

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25 }}
    >
      <NavLink to="/">
        <BiArrowBack size="38px" color="#003957" />
      </NavLink>
      <BackgroundImage />
      <Form onSubmit={(e) => e.preventDefault()}>
        <h1>Cadastro de Usuário</h1>
        <form autoComplete="off" onSubmit={handleSubmit(handleRegister)}>
          <DoubleFields>
            <InputField>
              <label htmlFor="name">Nome</label>
              <Input
                type="text"
                name="firstName"
                register={register}
              />
              <small>{errors.firstName?.message as string}</small>
            </InputField>
            <InputField>
              <label htmlFor="surname">Sobrenome</label>
              <Input
                type="text"
                name="lastName"
                register={register}
              />
              <small>{errors.lastName?.message as string}</small>
            </InputField>
          </DoubleFields>
          <InputField>
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              name="email"
              register={register}
            />
            <small>{errors.email?.message as string}</small>
          </InputField>
          <InputField>
            <label htmlFor="password">Senha</label>
            <Input
              type="password"
              name="password"
              register={register}
            />
            <small>{errors.password?.message as string}</small>
          </InputField>
          <InputField>
            <label htmlFor="confirmPassword">Repetir senha</label>
            <Input
              type="password"
              name="confirmPassword"
              register={register}
            />
            {errors.confirmPassword?.message && <small>As senhas precisam ser iguais!</small>}
          </InputField>
          <Button type="submit">Cadastrar</Button>
        </form>
      </Form>
    </Container>

  );
};

export default SignUpPage;
