import { getRepository } from 'typeorm';

import Tag from '../../models/Tag';

interface Request {
  name: string;
}

class CreateTagService {
  public async execute({ name }: Request): Promise<Tag> {
    const tagRepository = getRepository(Tag);

    if (!name) {
      throw new Error('value empaty');
    }

    const tag = tagRepository.create({
      name,
    });

    await tagRepository.save(tag);

    return tag;
  }
}

export default CreateTagService;
