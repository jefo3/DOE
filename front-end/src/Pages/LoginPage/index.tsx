import React, { useContext, useState } from 'react';

import { AiFillGift, AiFillMail, AiFillEye } from 'react-icons/ai';
import { BsFillKeyFill } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import {
  BackgroundImage, Container, Form, InputField, SignUpSection,
} from './styles';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../Store/Context/authContext';

const LoginPage: React.FC = () => {
  const context = useAuth();
  
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleLogin = () =>{
    if(email && password){
      context.Login(email, password).catch((error)=>{
        console.log('Erro ao fazer Login'+ error);
      });
    }
  }

  return(
  <Container>
    <BackgroundImage />
    <Form onSubmit={(e)=> e.preventDefault()}>
      <h1>Doe</h1>
      <AiFillGift color="#003957" size="62px" />
      <form autoComplete="off">
        <InputField>
          <label htmlFor="email">Email</label>
          <Input leftIcon={AiFillMail} name="email" type="email"
          onChange={(e) => setEmail(e.target.value)}/>
        </InputField>
        <InputField>
          <label htmlFor="password">Senha</label>
          <Input leftIcon={BsFillKeyFill} rightIcon={AiFillEye} type="password" name="password" 
          onChange={(e) => setPassword(e.target.value)}/>
        </InputField>
        <Button type="submit" onClick={() => handleLogin()}>Login</Button>
        <a href="#f">
          <FaLock />
          Perdeu sua senha ?
        </a>
      </form>
      <SignUpSection>
        <span>Não possui sua conta ?</span>
        <NavLink to="/register">
        Cadastre-se
        </NavLink>
      </SignUpSection>
    </Form>
  </Container>
  )
};

export default LoginPage;
