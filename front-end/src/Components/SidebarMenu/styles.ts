import styled from "styled-components";

interface MenuNavWrapperProps{
    pageActive: string;
}

export const Container = styled.div`
    position: fixed;
    width: 350px;
    height: 70%;
    left: 0;
    padding: 0 40px;
    
    display: flex;
    flex-direction: column;

    background-color: #f4f4f4;

    h1{
        font-size: 24px;
        font-weight: 500;
        color: #003957;
    }
`;

export const MenuNavWrapper = styled.div<MenuNavWrapperProps>`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    ${ pA => pA.pageActive === 'userItem' && `
        div:nth-child(3){
            border-right: 3px solid #003957;
        }
    ` }

    ${ pA => pA.pageActive === 'donationHistory' && `
        div:nth-child(2){
            border-right: 3px solid #003957;
        }
    ` }
`;

export const MenuNavItem = styled.div`
    display: flex;
    align-items: center;
    
    margin: 5px 0;
    padding: 15px 8px;
    gap: 15px;
    
    color: #003957;
    background-color: inherit;

    transition: background 250ms ease;
    
    a{
        text-decoration: none;
        color: #003957;
        font-size: 16px;
        margin-top: 2px;
    }

    &:last-child{
        border: none;
        gap: 5px;
        margin-top: auto;
        margin-bottom: 20px;
    }

    &:hover{
        background-color: #E3E3E3;
    }
`;