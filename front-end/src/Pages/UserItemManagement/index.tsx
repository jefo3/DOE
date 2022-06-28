import React, { useEffect, useState } from 'react';

import { AiFillCheckCircle, AiFillFileImage, AiFillMinusCircle } from 'react-icons/ai';
import { BsPencilFill } from 'react-icons/bs';

import { RiTimeFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import ptBr from 'date-fns/locale/pt-BR';
import { format, parseISO } from 'date-fns';
import NavMenu from '../../Components/NavMenu';
import SidebarMenu from '../../Components/SidebarMenu';
import { IDonate } from '../../Store/Interfaces/donateInterfaces';
import { deleteDonate, getDonatesByIdUser, updateDonateStatus } from '../../Store/Services/donateServices';

import {
  Container, Content, MainContent, DonationItem, IconsMenu
} from './styles';

import EditModal from '../../Components/EditModal';
import UpdateImageModal from '../../Components/UpdateImageModal';

const UserItemManagement: React.FC = () => {
  const [userDonations, setUserDonations] = useState<Array<IDonate>>([]);
  const [donationItem, setDonationItem] = useState<IDonate>();
  const [openModal, setOpenModal] = useState(false);
  const [openUpdateImageModal, setOpenUpdateImageModal] = useState(false);
  const [donateId, setDonateId] = useState<string>();

  const retrievingUserDonations = () => {
    try {
      return getDonatesByIdUser().then((response) => {
        setUserDonations(response);
      });
    } catch (error) {
      return console.log(error);
    }
  };

  const handleConvertingDate = (time: string) => {
    const date = parseISO(time);
    const formattedDate = format(date, ' d/LL/y', { locale: ptBr });
    return formattedDate;
  };

  const handleDeleteItem = (donationId: string) => {
    try {
      deleteDonate(donationId).then((response) => console.log(response));
      retrievingUserDonations();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateItemStatus = (donationId: string, donationStatus: string) => {
    if (donationStatus === 'pending') {
      const statusDonate = 'success';
      updateDonateStatus(donationId, statusDonate);
      document.location.reload();
    } else {
      const statusDonate = 'pending';
      updateDonateStatus(donationId, statusDonate);
      document.location.reload();
    }
  };

  const handleUpdateImage = (donationId: string) => {
    setDonateId(donationId);
    setOpenUpdateImageModal(true);
  };

  useEffect(() => {
    retrievingUserDonations();
  }, []);

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25 }}
    >
      <NavMenu />
      <Content>
        <SidebarMenu pageActive="userItem" />
        <MainContent>
          <h1>Gerenciamento de itens</h1>
          { userDonations?.map((userDonation) => (
            <DonationItem key={userDonation.id}>
              <span>{userDonation.title}</span>
              <span>{userDonation.tag.name}</span>
              <span>{handleConvertingDate(userDonation.created_at)}</span>
              <IconsMenu>
                <AiFillFileImage
                  onClick={() => handleUpdateImage(userDonation.id)}
                  color="#003957"
                />
                <AiFillMinusCircle
                  onClick={() => handleDeleteItem(userDonation.id)}
                  color="#EE3A3A"
                />
                <BsPencilFill
                  onClick={() => {
                    setOpenModal(true);
                    setDonationItem(userDonation);
                  }}
                  color="#2E69C2"
                />
                { userDonation.status_donate === 'pending'
                  ? (
                    <RiTimeFill
                      onClick={() => handleUpdateItemStatus(
                        userDonation.id,
                        userDonation.status_donate
                      )}
                      color="#ff9500"
                    />
                  )
                  : (
                    <AiFillCheckCircle
                      onClick={() => handleUpdateItemStatus(
                        userDonation.id,
                        userDonation.status_donate
                      )}
                      color="#019006"
                    />
                  )}
              </IconsMenu>
            </DonationItem>
          )) }
        </MainContent>
      </Content>
      { openModal && (
        <EditModal
          retrievingUserDonations={retrievingUserDonations}
          donationItem={donationItem}
          setOpenModal={setOpenModal}
        />
      )}

      { openUpdateImageModal
        && (
        <UpdateImageModal
          donateId={donateId as string}
          setOpenModal={setOpenUpdateImageModal}
        />
        )}

    </Container>
  );
};

export default UserItemManagement;
