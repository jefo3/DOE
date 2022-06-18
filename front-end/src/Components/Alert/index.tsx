/* eslint-disable react/jsx-props-no-spreading, react/require-default-props */
import React, { useState } from 'react';
import { Alert as AlertBootstrap } from 'react-bootstrap';
import { Container } from './styles';

interface IAlert {
    text: string | undefined;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Alert: React.FC<IAlert> = ({ text, show, setShow }) => {
    return (
        <Container>
            <AlertBootstrap show={show} variant="danger" onClose={() => setShow(false)} dismissible>
                {text}
            </AlertBootstrap>
        </Container>
    )
};

export default Alert;
