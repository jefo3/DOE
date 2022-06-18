import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { motion } from 'framer-motion';
import * as yup from 'yup';

import { BiArrowBack } from 'react-icons/bi';

import { useAuth } from '../../Store/Context/authContext';
import { ICreateUser } from '../../Store/Interfaces/userInterfaces';
import { createUser } from '../../Store/Services/userServices';

import Button from '../../Components/Button';
import Input from '../../Components/Input';
import  Alert  from '../../Components/Alert';

import {
  Container, BackgroundImage, Form, DoubleFields, InputField,
} from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  firstName: yup.string().required("Nome é um campo obrigatório"),
  lastName: yup.string().required("Sobrenome é um campo obrigatório"),
  email: yup.string().email("Digite um email válido").required("Email é um campo obrigatório"),
  password: yup.string().required("Senha é um campo obrigatório"),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]).required("Repita sua senha"), 
})

const SignUpPage: React.FC = () => {

  const context = useAuth();

  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertText, setAlertText] = useState<string>('');

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  })
  
  const handleRegister = (data: any) =>{
    const user: ICreateUser = {
      name: data.firstName,
      surname: data.lastName,
      email: data.email,
      password: data.password
    }

    createUser(user).then((response)=>{
      if(response){
        context.Login(data.email, data.password);
      }else{
        setAlertText('Erro inesperado ao acadastrar');
        setShowAlert(true);
      }
      console.log(response);
    }).catch((error)=>{
      setAlertText('Erro no servidor: '+error);
      setShowAlert(true);
    });
  }

  return (
  <Container
    as={motion.div} 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition= {{ delay: 0.25 }}
  >
    <NavLink to="/">
      <BiArrowBack size="38px" color="#003957"/>
    </NavLink>
    <BackgroundImage />
    <Form onSubmit={(e)=> e.preventDefault()}>
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
            <small>{errors.firstName?.message}</small>
          </InputField>
          <InputField>
            <label htmlFor="surname">Sobrenome</label>
            <Input 
              type="text" 
              name="lastName" 
              register={register} 
            />
            <small>{errors.lastName?.message}</small>
          </InputField>
        </DoubleFields>
        <InputField>
          <label htmlFor="email">Email</label>
          <Input 
            type="email" 
            name="email" 
            register={register}
          />
          <small>{errors.email?.message}</small>
        </InputField>
        <InputField>
          <label htmlFor="password">Senha</label>
          <Input 
            type="password" 
            name="password" 
            register={register}
          />
          <small>{errors.password?.message}</small>
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
      <Alert text={alertText} show={showAlert} setShow={setShowAlert}/>
    </Form>
  </Container>

)};

export default SignUpPage;
