import { ICreateFile, IFile } from '../Interfaces/fileInterface';
import {
  apiDelete, apiGet, apiPost, apiUpdate
} from './api';

const FileROUTER = 'files/';

export const createFile = (MyFile: ICreateFile) => apiPost<ICreateFile>(FileROUTER, MyFile);

export const getFileById = (idFile: ICreateFile) => apiGet<IFile>(`${FileROUTER}/${idFile}`);

export const updateFile = (idFile: ICreateFile) => apiUpdate<IFile>(`${FileROUTER}/${idFile}`);

export const deleteFile = (idFile: ICreateFile) => apiDelete(`${FileROUTER}/${idFile}`);
