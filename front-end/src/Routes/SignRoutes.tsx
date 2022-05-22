import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from '../Pages/SignUpPage';
import LoginPage from '../Pages/LoginPage';

const SignRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element = { <LoginPage/> }  />
                <Route path="/register" element = { <SignUpPage/> }   />
            </Routes>
        </BrowserRouter>
    );
};

export default SignRoutes;