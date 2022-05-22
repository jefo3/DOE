import { ICreateUser, IUser } from "../Interfaces/userInterfaces";
import { apiAuth, apiDelete, apiGet, apiLogOut, apiPost } from "./api";

const USER_ROUTER = 'users/';

export const LoginUser = async (email: string, password: string) =>{
    return apiAuth<IUser>(USER_ROUTER+'/login', {email, password});
}

export const LogOutUser = async () =>{
    return apiLogOut(USER_ROUTER+'/logout');
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
