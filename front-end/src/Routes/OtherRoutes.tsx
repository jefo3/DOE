import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '../Pages/HomePage';
import NewDonationPage from '../Pages/NewDonationPage';

const OtherRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomePage/>} />
        <Route path="/newdonation" element={<NewDonationPage/>} />
      </Routes>
    </BrowserRouter>
 );
};

export default OtherRoutes;