import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { AiFillGift, AiFillMail, AiFillEye } from 'react-icons/ai';
import { BsFillKeyFill } from 'react-icons/bs';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import {
  BackgroundImage, Container, Form, InputField, SignUpSection
} from './styles';

import { useAuth } from '../../Store/Context/authContext';

const schema = yup.object().shape({
  email: yup.string().email('Digite um email válido').required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatório')
});

const LoginPage: React.FC = () => {
  const { Login } = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const [togglePassword, setTogglePassword] = useState(false);

  const handleOnSubmit = async (data: any) => {
    await Login(data.email, data.password).catch((error) => {
      console.log(`Erro ao realizar login${error}`);
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
      <BackgroundImage />
      <Form onSubmit={handleSubmit(handleOnSubmit)}>
        <h1>Doe</h1>
        <AiFillGift color="#003957" size="62px" />
        <form autoComplete="off">
          <InputField>
            <label htmlFor="email">Email</label>
            <Input
              leftIcon={AiFillMail}
              name="email"
              type="email"
              autoComplete="off"
              register={register}
            />
            <small>{errors.email?.message}</small>
          </InputField>
          <InputField>
            <label htmlFor="password">Senha</label>
            <Input
              name="password"
              type={togglePassword ? 'text' : 'password'}
              autoComplete="current-password"
              leftIcon={BsFillKeyFill}
              rightIcon={AiFillEye}
              togglePassword={togglePassword}
              handleTogglePassword={setTogglePassword}
              register={register}
            />
            <small>{errors.password?.message}</small>
          </InputField>
          <Button type="submit">Login</Button>
        </form>
        <SignUpSection>
          <span>Não possui sua conta ?</span>
          <NavLink to="/register">
            Cadastre-se
          </NavLink>
        </SignUpSection>
      </Form>
    </Container>
  );
};

export default LoginPage;
