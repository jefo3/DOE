import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    background-color: #F4F4F4;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

export const MainContent = styled.div`
    display: flex;
    margin: 20px;
    gap: 40px;
    height: fit-content;
`;

export const ImageContainer = styled.div`
    width: 300px;

    img{
        width: 100%;
    }
`;

export const ItemInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;

    h1{
        color: #003957;
        font-size: 48px;
        font-weight: 500;
        margin-bottom: 20px;
    }

    p{
        font-size: 18px;
        font-weight: 300;
        color: #004C75;
        margin-bottom: 20px;
    }

    span{
        margin-top: auto;
        color: #004C75;
        margin-bottom: 80px;
    }

    div{
        align-self: flex-start;
        margin: 0;
        
        button{
            width: 230px;
            border-radius: 10px;
        }
    }
`;