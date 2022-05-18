import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  .icon-back{
    position: absolute;
    top: 10px;
    left: 20px;
    color: #003957;
    cursor: pointer;
    transition: filter 300ms;

    &:hover{
      filter: brightness(1.5);
    }
  }

  form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 10px;

    h1{
      font-size: 48px;
      color: #003957;
      margin: 10px 0;

      @media(max-width: 425px){
        font-size: 24px;
      }
    }
    
    label{
      display: flex;
      flex-direction: column;
      font-size: 14px;
      font-weight: bold;
      color: #003957;
  
      .input-icon{
        position: relative;
  
        svg{
          position: absolute;
          top: 16px;
          left: 10px;
        }
  
        input{
          margin: 5px 0;
          border: 2px solid #003957;
          width: 100%;
          height: 35px;
          border-radius: 5px;
          padding: 0 32px;
          transition: all 500ms;
  
          @media screen and (min-width: 1980px){
            height: 40px;
          }
  
          :focus{
            outline: none;
            border-color: #2E69C2;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          }
        }
  
      }
    }
  }

`;

export default Container;
