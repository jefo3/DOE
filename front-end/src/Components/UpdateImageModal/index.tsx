import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { AiFillCloseCircle, AiOutlineUpload } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { updateImageDonate } from '../../Store/Services/donateServices';
import Button from '../Button';

import { Container, Form, ImagePreview } from './styles';

interface IUpdateImageModal{
  // eslint-disable-next-line no-unused-vars
  setOpenModal: (open: boolean) => void;
  donateId: string;
}

const UpdateImageModal: React.FC<IUpdateImageModal> = ({ donateId, setOpenModal }) => {
  const [loadImage, setLoadImage] = useState(false);
  const imagePreview = useRef(document.createElement('img'));
  const [imageFile, setImageFile] = useState();
  const navigate = useNavigate();

  const handleInputFileOnChange = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      setImageFile(file);
      const reader = new FileReader();

      setLoadImage(true);

      reader.onload = () => {
        const readerResult: string = reader.result as string;
        imagePreview.current.setAttribute('src', readerResult);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmitImage = async () => {
    const formData = new FormData();
    formData.append('teste', imageFile);
    await updateImageDonate(donateId, formData);
    setOpenModal(false);
    document.location.reload();
    navigate('/');
  };

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25 }}
    >
      <Form>
        <AiFillCloseCircle
          onClick={() => setOpenModal(false)}
          size="28px"
          color="#EE3A3A"
        />
        <input onChange={handleInputFileOnChange} type="file" id="file" />
        <label htmlFor="file">
          <AiOutlineUpload />
          Carregar imagem
        </label>

        <ImagePreview>
          {
              loadImage ? <img ref={imagePreview} id="imagePreview" src="" alt="Img Preview" />
                : <span className="image-preview__default-text">Image Preview</span>
            }
        </ImagePreview>
        <Button type="button" onClick={handleSubmitImage}>Enviar Imagem</Button>
      </Form>
    </Container>
  );
};
export default UpdateImageModal;
