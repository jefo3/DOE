import React from 'react';

import { AiFillCheckCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsPencilFill } from 'react-icons/bs';

import NavMenu from '../../Components/NavMenu';
import SidebarMenu from '../../Components/SidebarMenu';

import { Container, Content, MainContent, DonationItem, IconsMenu } from './styles';

const UserItemManagement: React.FC = () => {
  return (
    <Container>
        <NavMenu />
        <Content>
            <SidebarMenu />
            <MainContent>
                <h1>Gerenciamento de itens</h1>
                <DonationItem>
                    <span>Camisa polo</span>
                    <span>Roupa</span>
                    <span>11/04/2022</span>
                    <IconsMenu>
                        <AiFillMinusCircle color="#EE3A3A" /> 
                        <BsPencilFill color="#2E69C2" />
                        <AiFillCheckCircle color="#019006" />
                    </IconsMenu>
                </DonationItem>
            </MainContent>
        </Content>
    </Container>
);
}

export default UserItemManagement;