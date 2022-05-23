import { getRepository } from 'typeorm';
import Tag from '../../models/Tag';

interface Request {
  id: string;
  name?: string;
}

class UpdateTagService {
  public async execute({ id, name }: Request): Promise<Tag> {
    const tagRepository = getRepository(Tag);

    const tag = await tagRepository.findOne(id);

    if (!tag) {
      throw new Error('Tag dont exist');
    }

    if (name) {
      tag.name = name;
    }

    await tagRepository.save(tag);

    return tag;
  }
}

export default UpdateTagService;
