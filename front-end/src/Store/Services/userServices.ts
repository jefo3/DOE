import { ICreateUser, IUser, ISession } from "../Interfaces/userInterfaces";
import { apiAuth, apiDelete, apiGet, apiPost } from "./api";

const USER_ROUTER = 'users/';

export const LoginUser = async (email: string, password: string) =>{
    return apiAuth<ISession>('/sessions', {email, password});
}

export const createUser = (user: ICreateUser) =>{
    return apiPost<ICreateUser>(USER_ROUTER, user);
}

export const getUserById = (idUser: ICreateUser) =>{
    return apiGet<IUser>(USER_ROUTER+'/'+idUser);
}

export const deleteUser = (idUser: ICreateUser) =>{
    return apiDelete(USER_ROUTER+'/'+idUser);
}
