import { FindManyOptions, getRepository } from 'typeorm';

import Tag from '../../models/Tag';

interface ITagRepository{
  find(options?: FindManyOptions<Tag> | undefined): Promise<Tag[]>
}

class ListTagService {

  constructor(private tagRepository: ITagRepository){}

  public async execute(): Promise<Tag[]> {
    try {
      const tags = await this.tagRepository.find();
      return tags;
    } catch (error) {
      if (error) throw error;
      throw new Error('Internal server error');
    }
  }
}

export default ListTagService;
