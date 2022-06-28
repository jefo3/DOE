import React from 'react';

import { AiFillCloseCircle } from 'react-icons/ai';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Form, InputField } from './styles';

import Input from '../Input';
import Button from '../Button';

import { IDonate } from '../../Store/Interfaces/donateInterfaces';
import { updateDonate } from '../../Store/Services/donateServices';

interface IEditModalProps{
  donationItem: IDonate | undefined;
  // eslint-disable-next-line no-unused-vars
  setOpenModal: (open: boolean) => void;
  retrievingUserDonations: () => void;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required()
});

const EditModal: React.FC<IEditModalProps> = ({
  donationItem,
  setOpenModal
}) => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  const handleOnSubmit = (data: any) => {
    updateDonate(donationItem?.id as string, data.name, data.description);
    setOpenModal(false);
    document.location.reload();
  };

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25 }}
    >
      <Form autoComplete="off" onSubmit={handleSubmit(handleOnSubmit)}>
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
            register={register}
          />
        </InputField>
        <InputField>
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            defaultValue={donationItem?.description}
            {...register('description', { required: true })}
          />
        </InputField>
        <Button type="submit">Atualizar</Button>
      </Form>
    </Container>
  );
};

export default EditModal;
