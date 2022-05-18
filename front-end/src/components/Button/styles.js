import styled from 'styled-components';

const ButtonContainer = styled.button`
  align-self: center;
  width: 120px;
  height: 35px;
  border: none;
  border-radius: 10px;
  background-color: #003957;
  color: #fff;
  cursor: pointer;
  transition: filter 500ms;
  font-weight: bold;

  &:hover{
    filter: brightness(1.2);
  }
`;

export default ButtonContainer;
