import { ICreatDonate, IDonate } from "../Interfaces/donateInterfaces";
import { apiDelete, apiGet, apiPost, apiUpdate } from "./api";

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

export const getAllSuccessfulDonates = () => {
    return apiGet<Array<IDonate>>(DONATES_ROUTER+'/feed/success');
};

export const updateDonate = (donateId: string, name: string, description: string) => {
    return apiUpdate(DONATES_ROUTER+donateId, {title: name, description});
}

export const updateDonateStatus = (donateId: string, status_donate: string) => {
    return apiUpdate(DONATES_ROUTER+donateId, { status_donate });
}

export const deleteDonate = (idDonate: string) =>{
    return apiDelete(DONATES_ROUTER+idDonate);
}
