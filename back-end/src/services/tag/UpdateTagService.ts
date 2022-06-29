import { FindOneOptions, getRepository, ObjectID, SaveOptions } from 'typeorm';
import Tag from '../../models/Tag';

interface Request {
  id: string;
  name?: string;
}

interface ITagRepository{
  findOne(id?: string | number | Date | ObjectID | undefined, options?: FindOneOptions<Tag> | undefined): Promise<Tag | undefined>;
  save(entity: Tag, options?: SaveOptions | undefined): Promise<Tag>;
}

class UpdateTagService {

  constructor(private tagRepository: ITagRepository){}

  public async execute({ id, name }: Request): Promise<Tag> {
    try {
      const tag = await this.tagRepository.findOne(id);

      if (!tag) {
        throw new Error(`Tag doesn't exist`);
      }

      if (name) {
        tag.name = name;
      }

      await this.tagRepository.save(tag);

      return tag;
    } catch (error) {
      if (error) throw error;
      throw new Error('Internal server error!')
    }
  }

}

export default UpdateTagService;
