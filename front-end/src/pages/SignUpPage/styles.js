import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;

  @media(max-width: 425px){
    overflow: scroll;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

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

    @media(max-width: 425px){
      top: 10px;
      left: 15px;
    }
  }

  .donation-image{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50vw;
    
    @media(max-width: 1250px){
      display: none;
    }
  }

  .login-form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    color: #003957;

    @media(max-width: 1250px){
      width: 100vw;
    }

    .login__title{
      margin: 1em;

      h1{
        font-size: 48px;
        
        @media(max-width: 425px){
          font-size: 24px;
        }
      }
    }

    .login__form{
      width: 600px;

      @media screen and (min-width: 320px) and (max-width: 424px){
        width: 100%;
      }
      @media screen and (min-width: 425px) and (max-width: 767px){
        width: 95%;
      }
      @media screen and (min-width: 1440px){
        width: 80%;
      }
    }

    .login__form form{
      display: flex;
      flex-direction: column;
      align-self: flex-start;
      margin: 24px;

      @media(max-width: 425px){
        margin: 10px;
      }
        
      .name-fields{
        display: flex;
        justify-content: flex-start;
        gap: 10px;

        label{
          display: flex;
          flex-direction: column;
          margin: 8px 0;
          font-size: 14px;
          font-weight: bold;
          color: #003957;
          width: 50%;
          
          input{
            margin: 5px 0;
            border: 2px solid #003957;
            width: 100%;
            height: 35px;
            border-radius: 5px;
            padding: 0 8px;
            transition: all 500ms;

            @media screen and (min-width: 1440px){
              height: 40px;
            }

            :focus{
              outline: none;
              border-color: #2E69C2;
              box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            }
          }

          @media(max-width: 425px){
            width: 100%;
          }
        }

        @media(max-width: 425px){
          flex-direction: column;
        }
      }

      .endereco{
        label:first-of-type{
          flex: 1;
        }

        label:last-of-type{
          width: 100px;
          margin-left: auto;

          @media(max-width: 425px){
            width: 100%;
            margin-left: 0;
          }
        }
      }

      .login{
        flex-direction: column;
        gap: 0px;

        label{
          width: 100%;
        }
      }

    }

   
  }
`;

export default Container;
