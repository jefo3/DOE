import Tag from '../../models/Tag';

interface Request {
  name: string;
}

interface ITagRepository{
  create(tag: Request): Promise<Tag>;
  save(tag: Request): Promise<Tag>;
}

class CreateTagService {

  constructor(private tagRepository: ITagRepository){}

  public async execute({ name }: Request): Promise<Tag> {

    try {
      if (!name) {
        throw new Error('value empty');
      }

      const tag = await this.tagRepository.create({
        name,
      });

      await this.tagRepository.save(tag);

      return tag;
    } catch (error) {
      if (error) throw error;
      throw new Error('Internal server error');
    }

  }
}

export default CreateTagService;
