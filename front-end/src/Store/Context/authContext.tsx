import React, { createContext, useContext, useEffect, useState } from 'react';
import { IUser } from '../Interfaces/userInterfaces';
import { setTokenApi } from '../Services/api';
import { LoginUser, LogOutUser } from '../Services/userServices';

interface IAuthContextUser {
  user?: IUser;
  signed: boolean;
  Login(email: string, password: string): Promise<void>;
  LogOut(): Promise<boolean>;
}

const AuthContext = createContext<IAuthContextUser>({} as IAuthContextUser);

export function useAuth(){
  const context = useContext(AuthContext);
  return context;
}

type Props = {
  children?: React.ReactNode
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<IUser>();

  const Login = (email: string, password: string) => {
    return LoginUser(email, password).then((response)=>{
      setUser(response);
    });
  }

  const LogOut = () => {
    return LogOutUser().then((response)=>{
      setUser(undefined);
      return response;
    });
  }
  
  useEffect(() => {
    const storagedUser = localStorage.getItem('@App:user');
    const storagedToken = localStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      setTokenApi(storagedToken);
    }
  }, []);

    return (
      <AuthContext.Provider value={{ signed: Boolean(user), Login, user, LogOut}}>
        {children}
      </AuthContext.Provider>
    );
  }; 

export default AuthContext;
