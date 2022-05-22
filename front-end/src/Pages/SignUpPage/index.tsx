import React, { useState } from 'react';

import { BiArrowBack } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import { useAuth } from '../../Store/Context/authContext';
import { ICreateUser } from '../../Store/Interfaces/userInterfaces';
import { createUser } from '../../Store/Services/userServices';

import {
  Container, BackgroundImage, Form, DoubleFields, InputField,
} from './styles';

const SignUpPage: React.FC = () => {

  const context = useAuth();
  
  const [fistName, setFistName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  
  const handleRegister = () =>{
    if(fistName && lastName && email && password && confirmPassword === password){
      const user: ICreateUser = {
        name: fistName,
        surname: lastName,
        email: email,
        password: password
      }
      createUser(user).then((response)=>{
        if(response){
          context.Login(email, password);
        }
      }).catch((error)=>{
        console.log('Erro ao fazer Login'+ error);
      });
    }
  }

  return (
  <Container>
    <NavLink to="/">
      <BiArrowBack size="38px" color="#003957"/>
    </NavLink>
    <BackgroundImage />
    <Form onSubmit={(e)=> e.preventDefault()}>
      <h1>Cadastro de Usuário</h1>
      <form autoComplete="off">
        <DoubleFields>
          <InputField>
            <label htmlFor="name">Nome</label>
            <Input type="text" name="name" 
             onChange={(e) => setFistName(e.target.value)}/>
          </InputField>
          <InputField>
            <label htmlFor="surname">Sobrenome</label>
            <Input type="text" name="surname" 
             onChange={(e) => setLastName(e.target.value)}/>
          </InputField>
        </DoubleFields>
        <InputField>
          <label htmlFor="email">Email</label>
          <Input type="email" name="email" 
             onChange={(e) => setEmail(e.target.value)}/>
          
        </InputField>
        <InputField>
          <label htmlFor="password">Senha</label>
          <Input type="password" name="password" 
          onChange={(e) => setPassword(e.target.value)}/>
        </InputField>
        <InputField>
          <label htmlFor="r-password">Repetir senha</label>
          <Input type="password" name="r-password" 
          onChange={(e) => setConfirmPassword(e.target.value)}/>
        </InputField>
        <Button onClick={()=>handleRegister()}>Cadastrar</Button>
      </form>
    </Form>
  </Container>

)};

export default SignUpPage;
