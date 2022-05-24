import { ITag } from "../Interfaces/tagsInterface";
import { apiGet } from "./api";

const TAGS_ROUTER = 'tags/';

export const getTags = async () =>{
    return await apiGet<Array<ITag>>(TAGS_ROUTER);
}