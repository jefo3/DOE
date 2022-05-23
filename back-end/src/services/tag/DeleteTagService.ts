import { getRepository } from 'typeorm';

import Tag from '../../models/Tag';

interface Request {
  id: string;
}

class DeleteTagService {
  public async execute({ id }: Request): Promise<Tag> {
    const tagRepository = getRepository(Tag);
    const tag = await tagRepository.findOne(id);

    if (!tag) {
      throw new Error('Tag dont exist');
    }

    await tagRepository.delete(tag.id);

    return tag;
  }
}

export default DeleteTagService;
