import { ICreateFile, IFile } from "../Interfaces/fileInterface";
import {  apiDelete, apiGet, apiPost, apiUpdate } from "./api";

const File_ROUTER = 'files/';

export const createFile = (MyFile: ICreateFile) =>{
    return apiPost<ICreateFile>(File_ROUTER, MyFile);
}

export const getFileById = (idFile: ICreateFile) =>{
    return apiGet<IFile>(File_ROUTER+'/'+idFile);
}

export const updateFile = (idFile: ICreateFile) =>{
    return apiUpdate<IFile>(File_ROUTER+'/'+idFile);
}

export const deleteFile = (idFile: ICreateFile) =>{
    return apiDelete(File_ROUTER+'/'+idFile);
}
