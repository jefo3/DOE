import React, { useContext } from 'react';

import SignRoutes from './SignRoutes';
import OtherRoutes from './OtherRoutes';
import AuthContext from '../Store/Context/authContext';

const Routes: React.FC = () => {
    const { signed } = useContext(AuthContext);
    return signed ? <OtherRoutes /> : <SignRoutes />;
};

export default Routes;