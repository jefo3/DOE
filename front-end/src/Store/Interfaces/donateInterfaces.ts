export interface ICreatDonate{
    title: string;
    description: string;
    user_id: string;
    category?:string;
    imageURL?: string;
}

export interface IDonate extends ICreatDonate{
    id: string;
}