import styled from 'styled-components';

import donationImage from '../../Images/donation-image.png';

const Container = styled.div`
    display: flex;
    min-height: 100vh;
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
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1023px){
        width: 100%;
    }
    
    h1{
        font-size: 64px;
        color: #003957;
    }

    form{
        display: flex;
        flex-direction: column;
        width: 70%;
        color: #003957;
        font-weight: 700;
        margin-top: 18px;

        @media (max-width: 1023px){
            width: 85%;
        }

        a{
            display: flex;
            text-decoration: none;
            color: #003957;
            gap: 5px;
            align-self: center;
            margin-top: 24px;
            transition: filter 250ms ease-in;

            &:hover{
                filter: brightness(1.3);
            }
        }
    }
`;

const InputField = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    label{
        font-size: 14px;
        margin-bottom: 5px;
    }
`;

const SignUpSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 62px;
    gap: 10px;

    span{
        font-size: 16px;
        font-weight: 700;
        color: #003957;
    }

    a{
        text-decoration: none;
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        background-color: #003957;
        padding: 8px 16px;
        border-radius: 10px;
        transition: filter 250ms ease-in;

        &:hover{
            filter: brightness(1.3);
        }
    }
`;

export {
  Container, BackgroundImage, Form, InputField, SignUpSection,
};
