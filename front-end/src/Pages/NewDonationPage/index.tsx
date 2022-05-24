import React, { useEffect, useRef, useState } from 'react';

import { AiOutlineUpload } from 'react-icons/ai';

import {
  Container, Content, ImagePreview, InputField,
} from './styles';

import NavMenu from '../../Components/NavMenu';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { ICreatDonate } from '../../Store/Interfaces/donateInterfaces';
import { createDonate } from '../../Store/Services/donateServices';
import { useAuth } from '../../Store/Context/authContext';
import { ITag } from '../../Store/Interfaces/tagsInterface';
import { getTags } from '../../Store/Services/tagsServices';
import { useNavigate } from 'react-router-dom';

const NewDonationPage: React.FC = () => {
  const context = useAuth();

  const [loadImage, setLoadImage] = useState(false);
  const imagePreview = useRef(document.createElement('img'));

  // const [imageURL, setImageURL] = useState<string>();
  const navigate = useNavigate();
  const [category, setCategory] = useState<string>();
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [tags, setTags] = useState<Array<ITag>>();

  const handleRefisterDonate = () =>{
    if(name && description && context.user){
      const donate: ICreatDonate = {
        title: name,
        description: description,
        user_id: context.user.id,
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
    <Container>
      <NavMenu />
      <Content>
        <h1>Nova Doação</h1>
        <form autoComplete="off" onSubmit={(e)=> e.preventDefault()}>
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
            <Input name="name" type="text"
            onChange={(e)=> setName(e.target.value)} />
          </InputField>
          <InputField>
            <label htmlFor="description">Descrição</label>
            <textarea id="description" 
            onChange={(e)=> setDescription(e.target.value)} />
          </InputField>
          <Button onClick={()=>{handleRefisterDonate()}}>Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
};

export default NewDonationPage;
