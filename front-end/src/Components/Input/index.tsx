/* eslint-disable react/jsx-props-no-spreading, react/require-default-props */
import React, { ComponentType, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import Wrapper from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    leftIcon?: ComponentType<IconBaseProps>;
    rightIcon?: ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  name, leftIcon: LeftIcon, rightIcon: RightIcon, ...rest
}) => (
  <Wrapper>
    { LeftIcon && <LeftIcon size="16px" /> }
    <input id={name} {...rest} />
    { RightIcon && <RightIcon size="16px" /> }
  </Wrapper>
);

export default Input;
