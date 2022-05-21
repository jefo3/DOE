import React, { useRef, useState } from 'react';

import { AiOutlineUpload } from 'react-icons/ai';

import {
  Container, Content, ImagePreview, InputField,
} from './styles';

import NavMenu from '../../Components/NavMenu';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

const NewDonationPage: React.FC = () => {
  const [loadImage, setLoadImage] = useState(false);
  const imagePreview = useRef(document.createElement('img'));

  const handleInputFileOnChange = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      setLoadImage(true);

      reader.onload = () => {
        const readerResult: string = reader.result as string;
        imagePreview.current.setAttribute('src', readerResult);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <NavMenu />
      <Content>
        <h1>Nova Doação</h1>
        <form autoComplete="off">
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
          <select>
            <option value="">Categoria do Item</option>
            <option value="objeto">Objeto</option>
            <option value="roupa">Roupa</option>
          </select>
          <InputField>
            <label htmlFor="name">Nome</label>
            <Input name="name" type="text" />
          </InputField>
          <InputField>
            <label htmlFor="description">Descrição</label>
            <textarea id="description" />
          </InputField>
          <Button>Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
};

export default NewDonationPage;
