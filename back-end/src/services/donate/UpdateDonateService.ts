import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import Donate from '../../models/Donate';

interface Request {
  title?: string;
  description?: string;
  tag_id?: string;
  id: string;
  status_donate: string;
}

class UpdateDonateService {
  public async execute({
    title,
    description,
    id,
    tag_id,
    status_donate,
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

    if (status_donate) {
      donate.status_donate = status_donate;
    }

    await donateRepository.save(donate);

    return donate;
  }
}

export default UpdateDonateService;
