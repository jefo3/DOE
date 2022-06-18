import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 100vh;
    width: 100%;
    
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    min-width: 600px;

    padding: 20px;
    
    background-color: #f4f4f4;
    color: #003957;

    border-radius: 8px;

    h1{
        font-weight: 500;
        margin-bottom: 20px;
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

export const InputField = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    width: 100%;

    input{
        padding: 10px;
    }

    label{
        align-self: flex-start;
        font-size: 14px;
        margin-bottom: 5px;
        font-weight: 700;
    }

    textarea{
        width: 100%;
        min-height: 125px;
        border: 1px solid #003957;
        border-radius: 5px;
        padding: 10px;
        background-color: #fafafa;
        transition: box-shadow 250ms ease;

        &:focus{
            outline: none;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
    }
`;
