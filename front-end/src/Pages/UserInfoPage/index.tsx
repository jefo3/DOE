import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Container, Content, InputField, MainContent } from './styles';

import NavMenu from '../../Components/NavMenu';
import SidebarMenu from '../../Components/SidebarMenu';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { useAuth } from '../../Store/Context/authContext';

const UserInfoPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const { user } = useAuth();

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    
  };
  
  return (
    <Container
        as={motion.div} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition= {{ delay: 0.15 }}
    >
        <NavMenu />
        <Content>
            <SidebarMenu pageActive='userInfo' />
            <MainContent>
                <h1>Informações do usuário</h1>
                <span>{user?.name} {user?.surname}</span>
                <form autoComplete='off' onSubmit={handleOnSubmit}>
                    <InputField>
                        <label htmlFor="name">Nome</label>
                        <Input 
                            name="name" 
                            type="text"
                            defaultValue={user?.name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </InputField>
                    <InputField>
                        <label htmlFor="surname">Sobrenome</label>
                        <Input 
                            name="surnname" 
                            type="text"
                            defaultValue={user?.surname}
                            onChange={(e) => setSurname(e.target.value)}
                        />
                    </InputField>
                    <InputField>
                        <label htmlFor="email">Email</label>
                        <Input 
                            name="email" 
                            type="email"
                            defaultValue={user?.email}
                            onChange={(e) => setEmail(e.target.value)}
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