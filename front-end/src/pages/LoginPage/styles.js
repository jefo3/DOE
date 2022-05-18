import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;

  .donation-image{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50vw;
    
    @media(max-width: 1024px){
      display: none;
    }
  }

  .login-form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;

    @media(max-width: 1024px){
      width: 100vw;
    }

      .login__title{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #003957;
  
        h1{
          font-size: 64px;
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
  
        label{
          display: flex;
          flex-direction: column;
          margin: 8px 0;
          font-size: 14px;
          font-weight: bold;
          color: #003957;
  
          .icon-input{
            position: relative;
            width: 100%;
  
            svg:first-of-type{
              position: absolute;
              top: 15px;
              left: 10px;

              @media screen and (min-width: 1440px){
                top: 22px;
              }
            }
  
            svg:last-of-type{
              position: absolute;
              top: 15px;
              right: 10px;

              @media screen and (min-width: 1440px){
                top: 22px;
              }
            }
  
            input{
              margin: 5px 0;
              border: 2px solid #003957;
              width: 100%;
              height: 35px;
              border-radius: 5px;
              padding-left: 30px;
              padding-right: 10px;
              transition: all 500ms;

              @media screen and (min-width: 1440px){
                height: 45px;
              }
            }
  
            input[type="password"]{
              padding-right: 35px;
            }
  
            input:focus{
              outline: none;
              border-color: #2E69C2;
              box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            }
  
          }
        }
      }
  
      .forgot-password{
        display: flex;
        margin: 5px;
        gap: 3px;
        color: #003957;
        transition: filter 500ms;
  
        a{
          text-decoration: none;
          color: #003957;
        }
  
        :hover{
          filter: brightness(1.5);
        }
      }
  
      .login__signup{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin: 2rem 0;
        gap: 10px;

        @media(max-width: 1024px){
          margin: 4rem 0;
        }

        p{
          font-size: 16px;
          font-weight: bold;
          color: #003957;
        }

        a{
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

  }
`;

export default Container;
