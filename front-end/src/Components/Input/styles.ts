import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    
    svg:first-of-type{
        position: absolute;
        top: 50%;
        transform: translate(50%, -50%);
        left: 0;
    }

    svg:last-of-type{
        position: absolute;
        top: 50%;
        transform: translate(50%, -50%);
        right: 20px;
        cursor: pointer;
    }

    input{
        width: 100%;
        height: 35px;
        border: 1px solid #003957;
        border-radius: 5px;
        padding: 0 30px;
        background-color: #fafafa;
        transition: box-shadow 250ms ease;

        &:focus{
            outline: none;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
    }
`;

export default Wrapper;
