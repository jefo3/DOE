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
        margin: 15px 0;
        color: #2E69C2;
        font-size: 22px;
        gap: 10px;
    }
`;

export const DonationItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    margin: 10px 0;
    background-color: #E3E3E3;
    width: 75%;
    padding: 18px 0;
    border-radius: 5px; 

    span{
        color: #0073B1;
        margin: 0 10px;
        
        &:nth-child(1){
            width: 50%;
        }
    }
`;   