import styled from 'styled-components';

const Wrapper = styled.div`
    align-self: center;

    button{
        width: 120px;
        height: 35px;
        background-color: #003957;
        border: none;
        border-radius: 10px;
        color: #fff;
        font-weight: 700;
        cursor: pointer;
        transition: filter 250ms ease-in;

        &:hover{
            filter: brightness(1.3);
        }
    }
`;

export default Wrapper;
