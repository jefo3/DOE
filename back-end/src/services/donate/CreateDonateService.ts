import { getRepository } from 'typeorm';

import Donate from '../../models/Donate';

interface Request {
  title: string;
  description: string;
  user_id: string;
  tag_id: string;
}

class CreateDonateService {
  public async execute({
    title,
    description,
    user_id,
    tag_id,
  }: Request): Promise<Donate> {
    const donateRepository = getRepository(Donate);

    const donate = donateRepository.create({
      title,
      description,
      user_id,
      tag_id,
    });

    await donateRepository.save(donate);

    return donate;
  }
}

export default CreateDonateService;
