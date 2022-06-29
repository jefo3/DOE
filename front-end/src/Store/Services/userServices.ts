import { ICreateUser, IUser, ISession } from '../Interfaces/userInterfaces';
import {
  apiAuth, apiDelete, apiGet, apiLogOut, apiPost, apiUpdate
} from './api';

const USER_ROUTER = 'users/';

export const LoginUser = async (email: string, password: string) => apiAuth<ISession>('/sessions', { email, password });

export const LogOutUser = async () => apiLogOut(`${USER_ROUTER}/logout`);

export const createUser = (user: ICreateUser) => apiPost<ICreateUser>(USER_ROUTER, user);

export const getUserById = (idUser: string) => apiGet<IUser>(`${USER_ROUTER}/${idUser}`);

export const updateUser = async (idUser: string, name?: string, surname?: string, email?: string) => apiUpdate(`${USER_ROUTER}${idUser}`, { name, surname, email });

export const deleteUser = (idUser: ICreateUser) => apiDelete(`${USER_ROUTER}/${idUser}`);
