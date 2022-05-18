import React from 'react';

import ButtonContainer from './styles';

function Button({ children }) {
  return <ButtonContainer type="button">{children}</ButtonContainer>;
}

export default Button;
