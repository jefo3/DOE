import { ITag } from '../Interfaces/tagsInterface';
import { apiGet } from './api';

const TAGS_ROUTER = 'tags/';

const getTags = async () => apiGet<Array<ITag>>(TAGS_ROUTER);

export default getTags;
