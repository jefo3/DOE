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
    flex: 1;
    width: 100%;
    padding-left: 360px;
`;

export const MainContent = styled.div`
    flex: 1;
    align-self: flex-start;
    padding: 20px;

    h1{
        color: #003957;
        font-size: 36px;
        font-weight: 600;
    }

`;

export const DonationItem = styled.div`
    display: flex;
    align-items: center;

    margin: 20px 0;
    background-color: #E3E3E3;
    width: 75%;
    padding: 18px 0;
    border-radius: 5px;

    span{
        color: #0073B1;
        margin: 0 10px;
    }

    span:nth-child(1){
        width: 45%;
    }
`;

export const IconsMenu = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: 10px;

    svg{
        margin: 0 5px;
        cursor: pointer;
    }

    svg:nth-child(3){
        margin-left: 20px;
    }
`;
