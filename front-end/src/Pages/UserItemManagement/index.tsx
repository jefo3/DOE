import React, { useEffect, useState } from 'react';

import { AiFillCheckCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsPencilFill } from 'react-icons/bs';

import NavMenu from '../../Components/NavMenu';
import SidebarMenu from '../../Components/SidebarMenu';
import { IDonate } from '../../Store/Interfaces/donateInterfaces';
import { getDonatesByIdUser } from '../../Store/Services/donateServices';

import { Container, Content, MainContent, DonationItem, IconsMenu } from './styles';

const UserItemManagement: React.FC = () => {

    const [userDonations, setUserDonations] = useState<Array<IDonate>>();

    const retrievingUserDonations = () => {
        try {
            return getDonatesByIdUser().then(response => {
                setUserDonations(response);
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        retrievingUserDonations();
    }, []);

    return (
        <Container>
            <NavMenu />
            <Content>
                <SidebarMenu />
                <MainContent>
                    <h1>Gerenciamento de itens</h1>
                    {
                        userDonations?.map(userDonation => (
                            <DonationItem key={userDonation.id}>
                                <span>{userDonation.title}</span>
                                <span>{userDonation.tag.name}</span>
                                <span>{userDonation.created_at}</span>
                                <IconsMenu>
                                    <AiFillMinusCircle color="#EE3A3A" /> 
                                    <BsPencilFill color="#2E69C2" />
                                    <AiFillCheckCircle color="#019006" />
                                </IconsMenu>
                            </DonationItem>
                        ))
                    } 
                </MainContent>
            </Content>
        </Container>
    );
}

export default UserItemManagement;