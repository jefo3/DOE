import React from 'react';

import { AiFillGift } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
import { RiKeyFill, RiLockPasswordFill } from 'react-icons/ri';
import { BsFillEyeFill } from 'react-icons/bs';

import { Link } from 'react-router-dom';
import DonationImage from '../../assets/DonationImage.png';

import Container from './styles';
import Button from '../../components/Button';

function LoginPage() {
  const handlePasswordToggle = () => {
    // console.log('hello world');
  };

  return (
    <Container>
      <div className="donation-image">
        <img src={DonationImage} alt="" />
      </div>

      <div className="login-form">
        <div className="login__title">
          <h1>Doe</h1>
          <AiFillGift size="62px" />
        </div>
        <div className="login__form">
          <form autoComplete="off">
            <label htmlFor="email" autofi="none">
              Email
              <div className="icon-input">
                <GrMail />
                <input type="email" id="email" name="email" />
              </div>
            </label>
            <label htmlFor="password">
              Senha
              <div className="icon-input">
                <RiKeyFill />
                <input type="password" id="password" name="password" />
                <BsFillEyeFill onClick={handlePasswordToggle} />
              </div>
            </label>
            <Button>Login</Button>
          </form>
        </div>
        <div className="forgot-password">
          <RiLockPasswordFill size="18px" />
          <Link to="/forgot-password">Esqueci minha senha</Link>
        </div>
        <div className="login__signup">
          <p>Não possui uma conta ?</p>
          <Link to="signup">
            <Button>Cadastre-se</Button>
          </Link>
        </div>
      </div>

    </Container>
  );
}

export default LoginPage;
