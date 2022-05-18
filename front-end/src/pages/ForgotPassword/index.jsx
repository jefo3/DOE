import React from 'react';

import { IoMdArrowBack } from 'react-icons/io';
import { GrMail } from 'react-icons/gr';

import { Link } from 'react-router-dom';
import Container from './styles';
import Button from '../../components/Button';

function ForgotPassword() {
  return (
    <Container>
      <Link to="/">
        <IoMdArrowBack className="icon-back" size="42px" />
      </Link>
      <form autoComplete="off">
        <h1>Recuperação de senha</h1>
        <label htmlFor="email">
          Email
          <div className="input-icon">
            <GrMail />
            <input type="email" name="email" id="email" />
          </div>
        </label>
        <Button>Enviar email</Button>
      </form>
    </Container>
  );
}

export default ForgotPassword;
