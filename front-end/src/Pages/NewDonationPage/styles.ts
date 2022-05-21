import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
    padding: 10px;
`;

export const Content = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    text-align: center;
    color: #003957;
    min-width: 800px;
    margin: 20px 0;

    @media (min-width: 320px) and (max-width: 767px){
      min-width: 100%;
    }

    @media (min-width: 768px) and (max-width: 1023px){
      min-width: 600px;
    }

    h1{
        margin-bottom: 10px;
        font-size: 48px;
        font-weight: 500;
    }

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 20px 0;

        select{
            margin: 10px 0;
            border: none;
            width: 200px;
            padding: 8px;
            border-radius: 5px;

            &:focus{
                outline: none;
            }
        }

        input[type="text"]{
            padding: 0 10px;
        }

        input[type="file"]{
            display: none;
        }

        label[for="file"]{
            align-self: flex-start;
            margin: 10px 0;
            width: 150px;
            height: 35px;
            background-color: #E3E3E3;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            gap: 5px;
            font-size: 14px;
            font-weight: bold;
        }
    }
`;

export const ImagePreview = styled.div`
    width: 300px;
    min-height: 200px;
    border: 1px solid #dddddd;

    display: flex;
    align-items: center;
    justify-content: center;

    img{
      width: 100%;
    }

    span{
        color: #ababab;
    }
`;

export const InputField = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    width: 100%;

    label{
        align-self: flex-start;
        font-size: 14px;
        margin-bottom: 5px;
        font-weight: 700;
    }

    textarea{
        width: 100%;
        min-height: 125px;
        border: 1px solid #003957;
        border-radius: 5px;
        padding: 10px;
        background-color: #fafafa;
        transition: box-shadow 250ms ease;

        &:focus{
            outline: none;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
    }
`;
