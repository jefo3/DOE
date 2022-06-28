/* eslint-disable camelcase */
import { ICreatDonate, IDonate } from '../Interfaces/donateInterfaces';
import {
  apiDelete, apiGet, apiPatch, apiPost, apiUpdate
} from './api';

const DONATES_ROUTER = 'donates/';

export const createDonate = (donate: ICreatDonate) => apiPost<ICreatDonate>(DONATES_ROUTER, donate);

export const getDonatesByIdUser = () => apiGet<Array<IDonate>>(DONATES_ROUTER);

export const getDonatesByTags = (tagId: string) => apiGet<Array<IDonate>>(`${DONATES_ROUTER}/feed/${tagId}`);

export const getDonatesByTitle = (title: string) => apiGet<Array<IDonate>>(`${DONATES_ROUTER}donate/${title}`);

export const getAllDonates = () => apiGet<Array<IDonate>>(`${DONATES_ROUTER}feed`);

export const getAllSuccessfulDonates = () => apiGet<Array<IDonate>>(`${DONATES_ROUTER}/feed/success`);

export const updateDonate = (donateId: string, name: string, description: string) => {
  apiUpdate(DONATES_ROUTER + donateId, { title: name, description });
};

export const updateImageDonate = (donateId: string, file: any) => {
  apiPatch(`${DONATES_ROUTER}image/${donateId}`, file);
};

export const updateDonateStatus = (donateId: string, status_donate: string) => {
  apiUpdate(DONATES_ROUTER + donateId, { status_donate });
};

export const deleteDonate = (idDonate: string) => apiDelete(DONATES_ROUTER + idDonate);
