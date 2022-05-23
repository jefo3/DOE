import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import Donate from '../../models/Donate';

interface Request {
  title?: string;
  description?: string;
  tag_id?: string;
  id: string;
}

class UpdateDonateService {
  public async execute({
    title,
    description,
    id,
    tag_id,
  }: Request): Promise<Donate> {
    const donateRepository = getRepository(Donate);

    const donate = await donateRepository.findOne(id);

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

    await donateRepository.save(donate);

    return donate;
  }
}

export default UpdateDonateService;
