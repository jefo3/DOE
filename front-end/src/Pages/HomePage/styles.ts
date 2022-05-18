import styled from 'styled-components';

const Container = styled.div`
    min-height: 100vh;
    background-color: #F4F4F4;
    position: relative;
    overflow: hidden;
`;

const UserMenu = styled.div`
    display: flex;
    padding: 15px;
    justify-content: space-between;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    span{
        font-size: 12px;
        font-weight: 700;
        color: #273B4A;
    }
`;

const Logout = styled.div`  
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: filter 250ms ease;

    span{
        font-size: 14px;
        font-weight: 700;
        color: #273B4A;
    }

    &:hover{
        filter: brightness(1.5);
    }
`;

const Content = styled.div`
    padding: 0 24px;

    @media (min-width: 320px) and (max-width: 767px){
        padding: 0 12px;
    }
`;

const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    gap: 20px;

    @media (min-width: 320px) and (max-width: 767px){
        flex-direction: column;
    }

    a{
        color: #273B4A;
        text-decoration: none;
        font-size: 12px;
        font-weight: 700;
    }

    form{
        color: #273B4A;
        margin-left: 40px;

        input{
            width: 500px;

            @media (min-width: 320px) and (max-width: 767px){
                width: 100%;
            }
        }

        @media (min-width: 320px) and (max-width: 767px){
            margin-left: 0px;
            width: 100%;
        }
    }
`;

const NavLinks = styled.div`
    display: flex;
    gap: 20px;
`;

const LinkItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 42px;
    align-items: center;
    color: #273B4A;
    text-align: center;
    gap: 10px;
    cursor: pointer;
    transition: filter 250ms ease;

    &:hover{
        filter: brightness(1.3);
    }
`;

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    margin: 40px 10px 20px;
    gap: 20px;

    @media (min-width: 1024px) and (max-width: 1439px){
        grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 768px) and (max-width: 1023px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 425px) and (max-width: 767px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 320px) and (max-width: 424px){
        grid-template-columns: 1fr;
    }
`;

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
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

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
`;

const ItemInfo = styled.div`
    border-top: 1px solid #ddd;
    padding: 10px;
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    color: #273B4A;
    gap: 5px;
    margin: 5px 0 10px;

    span{
        font-size: 14px;
        font-weight: 700;
    }
`;

export {
  Container, UserInfo, Logout, Content, NavWrapper, UserMenu, GridWrapper,
  GridItem, ItemInfo, Info, ImageContainer, NavLinks, LinkItem,
};
