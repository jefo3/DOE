import React from 'react';
import { motion } from 'framer-motion';
import * as yup from 'yup';

import { Container, Content, InputField, MainContent } from './styles';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import { useAuth } from '../../Store/Context/authContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    name: yup.string().required(),
    surname: yup.string().required(),
    email: yup.string().email().required(),
});

const UserInfoPage: React.FC = () => {
  const { user } = useAuth();

  const { register, handleSubmit } = useForm({
      resolver: yupResolver(schema),
  })

  const handleOnSubmit = (data: any) => {
    console.log(data);
  };
  
  return (
    <Container
        as={motion.div} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition= {{ delay: 0.15 }}
    >
        <Content>
            <MainContent>
                <h1>Informações do usuário</h1>
                <span>{user?.name} {user?.surname}</span>
                <form autoComplete='off' onSubmit={handleSubmit(handleOnSubmit)}>
                    <InputField>
                        <label htmlFor="name">Nome</label>
                        <Input 
                            name="name" 
                            type="text"
                            defaultValue={user?.name}
                            register={register}
                        />
                    </InputField>
                    <InputField>
                        <label htmlFor="surname">Sobrenome</label>
                        <Input 
                            name="surnname" 
                            type="text"
                            defaultValue={user?.surname}
                            register={register}
                        />
                    </InputField>
                    <InputField>
                        <label htmlFor="email">Email</label>
                        <Input 
                            name="email" 
                            type="email"
                            defaultValue={user?.email}
                            register={register}
                        />
                    </InputField>
                    <Button type='submit'>Salvar alterações</Button>
                </form>
            </MainContent>
        </Content>
    </Container>
  );
}

export default UserInfoPage;