import styled from 'styled-components';

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
    width: 100%;
    padding: 20px;
    padding-top: 50px;
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    h1{
        color: #003957;
        font-size: 36px;
        font-weight: 500;
        margin: 10px 0 15px;
    }

    p{
        display: flex;
        align-items: center;
        margin: 15px 0;
        color: #2E69C2;
        gap: 10px;
    }
`;
