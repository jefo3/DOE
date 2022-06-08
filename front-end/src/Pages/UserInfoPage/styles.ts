import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-color: #f4f4f4;
    padding: 10px;
`;

export const Content = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    padding-left: 360px;
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    h1{
        color: #003957;
        font-size: 36px;
        font-weight: 500;
        margin: 5px 0 15px;
    }

    span{
        font-size: 18px;
        font-weight: 500;
        color: #003957;
        margin: 15px 0;
    }

    form{
        display: flex;
        flex-direction: column;
        width: 60%;
    }
`;

export const InputField = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    label{
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 5px;
        color: #003957;
    }

    input{
        padding: 10px;
    }
`;