/* eslint-disable react/jsx-props-no-spreading, react/require-default-props */
import React, { ButtonHTMLAttributes } from 'react';

import Wrapper from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Wrapper>
    <button type="button" {...rest}>{children}</button>
  </Wrapper>
);

export default Button;
