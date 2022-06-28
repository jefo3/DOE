import React, { ComponentType, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import Wrapper from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    leftIcon?: ComponentType<IconBaseProps>;
    rightIcon?: ComponentType<IconBaseProps>;
    handleTogglePassword?: React.Dispatch<React.SetStateAction<boolean>>;
    togglePassword?: boolean;
    register?: any;
}

const Input: React.FC<InputProps> = ({
  name,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  togglePassword,
  handleTogglePassword,
  register,
  ...rest
}) => (
  <Wrapper>
    { LeftIcon && <LeftIcon size="16px" /> }
    <input
      id={name}
      name={name}
      {...register(name, { required: true })}
      {...rest}
    />
    { RightIcon
        && (
        <RightIcon
          onClick={() => handleTogglePassword && handleTogglePassword(!togglePassword)}
          size="16px"
        />
        ) }
  </Wrapper>
);

export default Input;
