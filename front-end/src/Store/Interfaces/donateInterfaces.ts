export interface ICreatDonate{
    title: string;
    description: string;
    user_id: string;
    tag_id?:string;
    imageURL?: string;
}

export interface IDonate extends ICreatDonate{
    id: string;
    tag: {
        name: string;
    };
    created_at: string;
    status_donate: string;
}