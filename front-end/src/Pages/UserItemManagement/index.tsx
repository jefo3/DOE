import React, { useEffect, useState } from 'react';

import { AiFillCheckCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsPencilFill } from 'react-icons/bs';

import NavMenu from '../../Components/NavMenu';
import SidebarMenu from '../../Components/SidebarMenu';
import { IDonate } from '../../Store/Interfaces/donateInterfaces';
import { deleteDonate, getDonatesByIdUser } from '../../Store/Services/donateServices';

import { Container, Content, MainContent, DonationItem, IconsMenu } from './styles';

import moment from 'moment';
import 'moment/locale/pt-br';
import EditModal from '../../Components/EditModal';
moment.locale('pt-br');

const UserItemManagement: React.FC = () => {

    const [userDonations, setUserDonations] = useState<Array<IDonate>>();
    const [donationItem, setDonationItem] = useState<IDonate>();
    const [openModal, setOpenModal] = useState(false);

    const retrievingUserDonations = () => {
        try {
            return getDonatesByIdUser().then(response => {
                setUserDonations(response);
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handleConvertingDate = (date: string) => {
        return moment(date).format("DD/MM/YY");
    };

    const handleDeleteItem = (donationId: string) => {
        try {
            deleteDonate(donationId).then(response => console.log(response));
            retrievingUserDonations();
        } catch (error) {
            console.log(error);
        }
    };

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
                                <span>{handleConvertingDate(userDonation.created_at)}</span>
                                <IconsMenu>
                                    <AiFillMinusCircle 
                                        onClick={() => handleDeleteItem(userDonation.id)} 
                                        color="#EE3A3A" 
                                    /> 
                                    <BsPencilFill 
                                        onClick={() => {
                                            setOpenModal(true)
                                            setDonationItem(userDonation)
                                        }}
                                        color="#2E69C2" 
                                    />
                                    <AiFillCheckCircle color="#019006" />
                                </IconsMenu>
                            </DonationItem>
                        ))
                    } 
                </MainContent>
            </Content>
            { openModal && 
                <EditModal 
                    retrievingUserDonations={retrievingUserDonations}
                    donationItem={donationItem} 
                    setOpenModal={setOpenModal}
                /> 
            }
        </Container>
    );
}

export default UserItemManagement;