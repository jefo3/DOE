import { ICreatDonate, IDonate } from "../Interfaces/donateInterfaces";
import { apiDelete, apiGet, apiPost } from "./api";

const DONATES_ROUTER = 'donates/';

export const createDonate = (donate: ICreatDonate) =>{
    return apiPost<ICreatDonate>(DONATES_ROUTER, donate);
}

export const getDonatesByIdUser = () =>{
    return apiGet<Array<IDonate>>(DONATES_ROUTER);
}

export const getAllDonates = () => {
    return apiGet<Array<IDonate>>(DONATES_ROUTER+'/feed');
};

export const deleteDonate = (idDonate: string) =>{
    return apiDelete(DONATES_ROUTER+'/'+idDonate);
}
