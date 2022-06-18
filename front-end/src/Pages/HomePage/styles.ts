import styled from 'styled-components';

interface GridWrapperProps{
    noItems: boolean;
}

const Container = styled.div`
    min-height: 100vh;
    background-color: #F4F4F4;
    overflow: hidden;
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

const GridWrapper = styled.div<GridWrapperProps>`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    margin: 80px 10px 40px;
    gap: 20px;
    position: relative;

    select{
        position: absolute;
        top: -50px;
        right: 50px;
        color: #273B4A;
        background-color: transparent;
        border: none;

        &:focus{
            outline: none;
        }
    }

    p{
        display: flex;
        font-weight: 600;
        justify-content: center;
        gap: 10px;
        font-size: 22px;
        color: #F05656;
    }

    ${ noItem => noItem.noItems && `
        grid-template-columns: 1fr;
    ` }

    @media (min-width: 1024px) and (max-width: 1439px){
        grid-template-columns: repeat(4, 1fr);
        ${ noItem => noItem.noItems && `
            grid-template-columns: 1fr;
        ` }
    }

    @media (min-width: 768px) and (max-width: 1023px){
        grid-template-columns: repeat(3, 1fr);
        ${ noItem => noItem.noItems && `
            grid-template-columns: 1fr;
        ` }
    }

    @media (min-width: 425px) and (max-width: 767px){
        grid-template-columns: repeat(2, 1fr);
        ${ noItem => noItem.noItems && `
            grid-template-columns: 1fr;
        ` }
    }

    @media (min-width: 250px) and (max-width: 424px){
        grid-template-columns: 1fr;
    }
`;

export {
  Container, NavWrapper, GridWrapper,
  NavLinks, LinkItem,
};
