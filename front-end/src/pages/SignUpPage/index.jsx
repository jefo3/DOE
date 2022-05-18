import React from 'react';

import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

import DonationImage from '../../assets/DonationImage.png';
import Button from '../../components/Button';

import Container from './styles';

function SignUpPage() {
  return (
    <Container>

      <Link to="/">
        <IoMdArrowBack size="38px" className="icon-back" />
      </Link>

      <div className="donation-image">
        <img src={DonationImage} alt="" />
      </div>

      <div className="login-form">
        <div className="login__title">
          <h1>Cadastro de Usuário</h1>
        </div>
        <div className="login__form">
          <form autoComplete="off">
            <div className="name-fields">
              <label htmlFor="name" autofi="none">
                Nome
                <input type="text" id="name" name="name" />
              </label>
              <label htmlFor="surname">
                Sobrenome
                <input type="text" id="surname" name="surname" />
              </label>
            </div>
            <div className="name-fields">
              <label htmlFor="cep">
                CEP
                <input type="text" id="cep" name="cep" />
              </label>
              <label htmlFor="estado">
                Estado
                <input type="text" id="estado" name="estado" />
              </label>
            </div>
            <div className="name-fields endereco">
              <label htmlFor="endereco">
                Endereço
                <input type="text" id="endereco" name="endereco" />
              </label>
              <label htmlFor="numero">
                Numero
                <input type="text" id="numero" name="numero" />
              </label>
            </div>
            <div className="name-fields">
              <label htmlFor="bairro">
                Bairro
                <input type="text" id="bairro" name="bairro" />
              </label>
              <label htmlFor="telefone">
                Telefone
                <input type="text" id="telefone" name="telefone" />
              </label>
            </div>
            <div className="name-fields login">
              <label htmlFor="email">
                Email
                <input type="email" id="email" name="email" />
              </label>
              <label htmlFor="password">
                Senha
                <input type="password" id="password" name="password" />
              </label>
            </div>
            <Button>Cadastrar</Button>
          </form>
        </div>
      </div>

    </Container>
  );
}

export default SignUpPage;
