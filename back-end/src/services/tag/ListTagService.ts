import { getRepository } from 'typeorm';

import Tag from '../../models/Tag';

class ListTagService {
  public async execute(): Promise<Tag[]> {
    const tagRepository = getRepository(Tag);
    const tags = await tagRepository.find();

    return tags;
  }
}

export default ListTagService;
