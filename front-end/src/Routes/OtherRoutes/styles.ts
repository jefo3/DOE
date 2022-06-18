import styled from "styled-components";

interface MenuNavWrapperProps {
    pageActive: number;
}

export const Container = styled.div`
position: fixed;
left: 0;
padding: 40px 20px 0 10px;
height: 100%;
background: rgb(0,57,87);
width: 20%;
h1{
        font-size: 24px;
        font-weight: 500;
        color: white;
    }

    img{
        display: block;
    margin-left: auto;
    margin-right: auto;
    }
`;

export const MenuNavWrapper = styled.div<MenuNavWrapperProps>`
    margin-top: 20px;

    ${pA => pA.pageActive && `
        div:nth-child(${pA.pageActive}){
            border-right: 3px solid #E3E3E3;
        }
    ` }
`;

export const MenuNavItem = styled.div`
    display: flex;
    align-items: center;
    
    margin: 5px 0;
    padding: 10px 10px;
    gap: 15px;
    
    color: white;
    background-color: inherit;

    transition: background 250ms ease;
    
    a{
        text-decoration: none;
        color: white;
        font-size: 16px;
        margin-top: 2px;
    }

    &:last-child{
        border: none;
        gap: 5px;
        margin-top: auto;
        margin-bottom: 0;
    }

    &:hover{
        background-color: #E3E3E3;
        color: #003957;
    }

    svg{
        margin-right: 10px;
        margin-bottom: 3px;
        color: white;
    }
`;

