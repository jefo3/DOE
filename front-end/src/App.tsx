import React from 'react';
import Routes from './Routes';
import { AuthProvider } from './Store/Context/authContext';
import GlobalStyle from './styles/globalStyles';

const App = () => (
  <AuthProvider>
    <GlobalStyle />
    <Routes />
  </AuthProvider>
);

export default App;
