import React from 'react';
import { AiFillTag } from 'react-icons/ai';

import { FaUserAlt } from 'react-icons/fa';
import { RiFileList2Fill, RiLogoutBoxFill } from 'react-icons/ri';

import { Container, MenuNavItem, MenuNavWrapper } from './styles';

const SidebarMenu: React.FC = () => {
  return(
    <Container>
        <h1>Perfil do Usuário</h1>
        <MenuNavWrapper>
            <MenuNavItem>
                <FaUserAlt size="18px" />
                <a href='#userinfo'>Informações do usuário</a>
            </MenuNavItem>
            <MenuNavItem>
                <RiFileList2Fill size="18px" />
                <a href='#userinfo'>Histórico de doações</a>
            </MenuNavItem>
            <MenuNavItem>
                <AiFillTag size="18px" />
                <a href='#userinfo'>Gerenciamento de itens</a>
            </MenuNavItem>
            <MenuNavItem>
                <RiLogoutBoxFill size="28" />
                <a href='#userinfo'>LogOut</a>
            </MenuNavItem>
        </MenuNavWrapper>
    </Container>
  );
}

export default SidebarMenu;