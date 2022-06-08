import React from 'react';
import { AiFillTag } from 'react-icons/ai';

import { FaUserAlt } from 'react-icons/fa';
import { RiFileList2Fill, RiLogoutBoxFill } from 'react-icons/ri';

import { Container, MenuNavItem, MenuNavWrapper } from './styles';

import { useAuth } from '../../Store/Context/authContext';
import { Link } from 'react-router-dom';

interface SidebarMenuProps{
    pageActive: string;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ pageActive }) => {
  const { LogOut } = useAuth();

  return(
    <Container>
        <h1>Perfil do Usuário</h1>
        <MenuNavWrapper pageActive={pageActive}>
            <MenuNavItem>
                <FaUserAlt size="18px" />
                <Link to='/userinfo'>Informações do usuário</Link>
            </MenuNavItem>
            <MenuNavItem>
                <RiFileList2Fill size="18px" />
                <Link to='/donationhistory'>Histórico de doações</Link>
            </MenuNavItem>
            <MenuNavItem>
                <AiFillTag size="18px" />
                <Link to='/usermanagement'>Gerenciamento de itens</Link>
            </MenuNavItem>
            <MenuNavItem>
                <RiLogoutBoxFill size="28" />
                <a href="#logout" onClick={LogOut}>LogOut</a>
            </MenuNavItem>
        </MenuNavWrapper>
    </Container>
  );
}

export default SidebarMenu;