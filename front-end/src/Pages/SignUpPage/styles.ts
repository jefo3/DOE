import styled from 'styled-components';

import donationImage from '../../Images/donation-image.png';

const Container = styled.div`
    min-height: 100vh;
    position: relative;
    display: flex;

    svg{
        position: absolute;
        top: 10px;
        left: 20px;
        cursor: pointer;
        transition: filter 250ms ease-in;

        @media (max-width: 540px){
            width: 22px;
            top: 0px;
            left: 10px;
        }

        &:hover{
            filter: brightness(1.5);
        }
    }
`;

const BackgroundImage = styled.div`
    background-image: url(${donationImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    width: 40%;

    @media(max-width: 1023px){
        display: none;
    }
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    color: #003957;
    padding: 0 20px;

    @media (max-width: 1023px){
        width: 100%;
    }

    h1{
        margin: 20px 0;
        
        @media (max-width: 540px){
            font-size: 28px;
        }
    }

    form{
        display: flex;
        flex-direction: column;
        align-self: center;
        width: 85%;
        
        input{
            padding: 0 10px;
        }


        button{
            margin: 12px 0;
        }
    }

`;

const DoubleFields = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 540px){
        flex-direction: column;
        gap: 0;
    }
`;

const InputField = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    width: 100%;

    label{
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 5px;
    }
`;

export {
  Container, BackgroundImage, Form, DoubleFields, InputField,
};
