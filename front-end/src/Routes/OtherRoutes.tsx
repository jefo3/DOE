import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '../Pages/HomePage';
import NewDonationPage from '../Pages/NewDonationPage';
import DonationHistory from '../Pages/DonationHistory';
import UserInfoPage from '../Pages/UserInfoPage';
import UserItemManagement from '../Pages/UserItemManagement';

const OtherRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomePage/>} />
        <Route path="/newdonation" element={<NewDonationPage/>} />
        <Route path="/usermanagement" element={<UserItemManagement/>} />
        <Route path="/donationhistory" element={<DonationHistory/>} />
        <Route path="/userinfo" element={<UserInfoPage/>} />
      </Routes>
    </BrowserRouter>
 );
};

export default OtherRoutes;