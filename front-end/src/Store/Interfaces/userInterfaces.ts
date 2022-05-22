export interface ICreateUser {
    name: string;
    surname: string;
    email: string;
    password: string;
}

export interface IUser extends ICreateUser{
    id: string;
}

export interface ISession{
    user: IUser,
    token: string,
}
