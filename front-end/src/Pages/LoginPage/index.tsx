import React from 'react';

import { AiFillGift, AiFillMail, AiFillEye } from 'react-icons/ai';
import { BsFillKeyFill } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import {
  BackgroundImage, Container, Form, InputField, SignUpSection,
} from './styles';

const LoginPage: React.FC = () => (
  <Container>
    <BackgroundImage />
    <Form>
      <h1>Doe</h1>
      <AiFillGift color="#003957" size="62px" />
      <form autoComplete="off">
        <InputField>
          <label htmlFor="email">Email</label>
          <Input leftIcon={AiFillMail} name="email" type="email" />
        </InputField>
        <InputField>
          <label htmlFor="password">Senha</label>
          <Input leftIcon={BsFillKeyFill} rightIcon={AiFillEye} type="password" name="password" />
        </InputField>
        <Button type="submit">Login</Button>
        <a href="#f">
          <FaLock />
          Perdeu sua senha ?
        </a>
      </form>
      <SignUpSection>
        <span>Não possui sua conta ?</span>
        <a href="#c">Cadastre-se</a>
      </SignUpSection>
    </Form>
  </Container>
);

export default LoginPage;
