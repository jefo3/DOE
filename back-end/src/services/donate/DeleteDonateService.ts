import { getRepository } from 'typeorm';

import Donate from '../../models/Donate';

interface Request {
  id: string;
}

class DeleteDonateService {
  public async execute({ id }: Request): Promise<Donate> {
    const donateRepository = getRepository(Donate);
    const donate = await donateRepository.findOne(id);

    if (!donate) {
      throw new Error('donate dont exist');
    }

    await donateRepository.delete(donate.id);

    return donate;
  }
}

export default DeleteDonateService;
