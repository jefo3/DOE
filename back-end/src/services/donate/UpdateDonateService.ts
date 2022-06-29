import { getRepository, FindOneOptions } from 'typeorm';
import { hash } from 'bcryptjs';

import Donate from '../../models/Donate';

interface Request {
  title?: string;
  description?: string;
  tag_id?: string;
  id: string;
  status_donate?: string;
}

interface IDonateRepository{
  findOne(id:string): Promise<Donate | undefined>;
  save(donate: Request): Promise<Donate>;
}

class UpdateDonateService {
  constructor(private donateRepository: IDonateRepository){}
  public async execute({
    title,
    description,
    id,
    tag_id,
    status_donate,
  }: Request): Promise<Donate> {
    //const donateRepository = getRepository(Donate);

    const donate = await this.donateRepository.findOne(id);

    if (!donate) {
      throw new Error('donate dont exist');
    }

    if (title) {
      donate.title = title;
    }

    if (description) {
      donate.description = description;
    }

    if (tag_id) {
      donate.tag_id = tag_id;
    }

    if (status_donate) {
      donate.status_donate = status_donate;
    }

    await this.donateRepository.save(donate);

    return donate;
  }
}

export default UpdateDonateService;
