import { DeleteResult, FindConditions, FindOneOptions, getRepository, ObjectID } from 'typeorm';

import Tag from '../../models/Tag';

interface Request {
  id: string;
}

interface ITagRepository{
  findOne(id?: string | number | Date | ObjectID | undefined, options?: FindOneOptions<Tag> | undefined): Promise<Tag | undefined>;
  delete(criteria: string | number | Date | ObjectID | string[] | number[] | Date[] | ObjectID[] | FindConditions<Tag>): Promise<DeleteResult>
}

class DeleteTagService {

  constructor(private tagRepository: ITagRepository){}

  public async execute({ id }: Request): Promise<Tag> {
    try {
      const tag = await this.tagRepository.findOne(id);

      if (!tag) {
        throw new Error('Tag dont exist');
      }

      await this.tagRepository.delete(tag.id);

      return tag;
    } catch (error) {
      if (error) throw error;
      throw new Error('Internal server error');
    }
  }
}

export default DeleteTagService;
