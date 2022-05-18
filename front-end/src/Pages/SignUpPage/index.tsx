import React from 'react';

import { BiArrowBack } from 'react-icons/bi';
import Button from '../../Components/Button';
import Input from '../../Components/Input';

import {
  Container, BackgroundImage, Form, DoubleFields, InputField,
} from './styles';

const SignUpPage: React.FC = () => (
  <Container>
    <BiArrowBack size="38px" color="#003957" />
    <BackgroundImage />
    <Form>
      <h1>Cadastro de Usuário</h1>
      <form autoComplete="off">
        <DoubleFields>
          <InputField>
            <label htmlFor="name">Nome</label>
            <Input type="text" name="name" />
          </InputField>
          <InputField>
            <label htmlFor="surname">Sobrenome</label>
            <Input type="text" name="surname" />
          </InputField>
        </DoubleFields>
        <InputField>
          <label htmlFor="email">Email</label>
          <Input type="email" name="email" />
        </InputField>
        <InputField>
          <label htmlFor="password">Senha</label>
          <Input type="password" name="password" />
        </InputField>
        <InputField>
          <label htmlFor="r-password">Repetir senha</label>
          <Input type="password" name="r-password" />
        </InputField>
        <Button>Cadastrar</Button>
      </form>
    </Form>
  </Container>

);

export default SignUpPage;
