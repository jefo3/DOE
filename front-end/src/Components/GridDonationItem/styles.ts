import styled from "styled-components";

export const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 220px;
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
    justify-self: center;
    filter: drop-shadow(0px 0.25px 1px rgba(0, 0, 0, 0.039)) drop-shadow(0px 0.85px 3px rgba(0, 0, 0, 0.19));
    cursor: pointer;
    transition: transform 250ms ease;

    &:hover{
        transform: scale(1.025);
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;

    img {
        width: 60%;
    }
`;

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    border-top: 1px solid #ddd;
    padding: 10px;
    gap: 8px;

    div:nth-of-type(3){
        margin: auto 0 5px; 

        span{
            font-size: 12px;
        }
    }
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    color: #273B4A;
    gap: 10px;

    span{
        font-size: 14px;
        font-weight: 700;
    }

    span:first-of-type{
        font-size: 13px;
    }
`;
