import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as yup from 'yup';

import { AiOutlineUpload } from 'react-icons/ai';

import {
  Container, Content, ImagePreview, InputField,
} from './styles';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import { ICreatDonate } from '../../Store/Interfaces/donateInterfaces';
import { createDonate } from '../../Store/Services/donateServices';

import { useAuth } from '../../Store/Context/authContext';

import { ITag } from '../../Store/Interfaces/tagsInterface';
import { getTags } from '../../Store/Services/tagsServices';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().required("Nome é um campo obrigatório"),
  description: yup.string().required("Descrição é um campo obrigatório"),
});

const NewDonationPage: React.FC = () => {
  const { user } = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  })

  const [loadImage, setLoadImage] = useState(false);
  const imagePreview = useRef(document.createElement('img'));

  // const [imageURL, setImageURL] = useState<string>();
  const navigate = useNavigate();
  const [tags, setTags] = useState<Array<ITag>>();
  const [category, setCategory] = useState<string>('');

  const handleRegisterDonate = (data: any) =>{
    const donate: ICreatDonate = {
      title: data.name,
      description: data.description,
      user_id: user?.id as string,
      tag_id: category,
    }

    createDonate(donate).then((response)=>{
      if(response){
        navigate('/');
        alert("Cadastrado com sucesso");
      }
    }).catch((error)=>{
      console.log(error);
      alert("Não foi possível cadastrar");
    })
  }
  
  const handleInputFileOnChange = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      setLoadImage(true);

      reader.onload = () => {
        const readerResult: string = reader.result as string;
        imagePreview.current.setAttribute('src', readerResult);
        // setImageURL(readerResult);
      };

      reader.readAsDataURL(file);
    }
  };

  const retrieveTags = () => {
    return getTags().then((response)  => {
      setTags(response);  
    });
  }

  useEffect(() => {
    retrieveTags();
  }, []);

  return (
    <Container
      as={motion.div} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition= {{ delay: 0.25 }}
    >
      <Content>
        <h1>Nova Doação</h1>
        <form autoComplete="off" onSubmit={handleSubmit(handleRegisterDonate)}>
          <input onChange={handleInputFileOnChange} type="file" id="file" />
          <label htmlFor="file">
            <AiOutlineUpload />
            Enviar imagem
          </label>
          <ImagePreview>
            {
              loadImage ? <img ref={imagePreview} id="imagePreview" src="" alt="Img Preview" />
                : <span className="image-preview__default-text">Image Preview</span>
            }
          </ImagePreview>
          <select onChange={(e)=> setCategory(e.target.value)}>
            <option value="">Selecionar categoria</option>
            {
              tags?.map(tag => (
                <option key={tag.id} value={tag.id}>{tag.name}</option>
              ))
            }
          </select>
          <InputField>
            <label htmlFor="name">Nome</label>
            <Input
              name="name" 
              type="text"
              register={register} 
            />
            <small>{errors.name?.message}</small>
          </InputField>
          <InputField>
            <label htmlFor="description">Descrição</label>
            <textarea 
              id="description" 
              {...register('description', { required: true })}
            />
            <small>{errors.description?.message}</small>
          </InputField>
          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
};

export default NewDonationPage;
