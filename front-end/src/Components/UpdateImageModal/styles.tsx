import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 100vh;
    width: 100%;

    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    min-width: 600px;

    padding: 20px;

    background-color: #f4f4f4;
    color: #003957;

    border-radius: 8px;

    input[type="file"]{
      display: none;
    }

    label[for="file"]{
      margin: 10px 0;
      width: 150px;
      height: 35px;
      background-color: #E3E3E3;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      gap: 5px;
      font-size: 14px;
      font-weight: bold;

      svg{
        position: static;
      }
    }

    svg{
        position: absolute;
        top: -40px;
        right: -5px;
        cursor: pointer;
        transition: filter 250ms ease;

        &:hover{
            filter: brightness(1.3);
        }
    }
`;

export const ImagePreview = styled.div`
  width: 300px;
  min-height: 200px;
  border: 1px solid #dddddd;
  margin: 10px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  img{
    width: 100%;
  }

  span{
    color: #ababab;
  }
`;
