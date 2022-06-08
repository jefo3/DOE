import React, { useState } from 'react';

import { AiFillCloseCircle } from 'react-icons/ai';

import { Container, Form, InputField } from './styles';

import Input from '../Input';
import Button from '../Button';

import { IDonate } from '../../Store/Interfaces/donateInterfaces';
import { updateDonate } from '../../Store/Services/donateServices';
import { motion } from 'framer-motion';

interface IEditModalProps{
  donationItem: IDonate | undefined;
  setOpenModal: (open: boolean) => void;
  retrievingUserDonations: () => void;
}

const EditModal: React.FC<IEditModalProps> = ({ donationItem, setOpenModal, retrievingUserDonations }) => {

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    updateDonate(donationItem?.id as string, name, description);
    setOpenModal(false);
    document.location.reload();
  };
  
  return (
    <Container
      as={motion.div} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition= {{ delay: 0.25 }}
    >
      <Form autoComplete='off' onSubmit={handleOnSubmit}>
        <AiFillCloseCircle 
          onClick={() => setOpenModal(false)} 
              size="28px" 
              color="#EE3A3A" 
        />
        <h1>Atualizando doação</h1>
        <InputField>
            <label htmlFor="name">Nome</label>
              <Input 
                name="name" 
                type="text" 
                defaultValue={donationItem?.title}
                onChange={(e) => setName(e.target.value)}
              />
        </InputField>
        <InputField>
              <label htmlFor="description">Descrição</label>
              <textarea 
                id="description" 
                defaultValue={donationItem?.description}
                onChange={(e) => setDescription(e.target.value)} 
              />
        </InputField>
        <Button type='submit'>Atualizar</Button>
      </Form>
    </Container>
  );
}

export default EditModal;