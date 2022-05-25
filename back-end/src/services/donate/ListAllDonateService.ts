import { getRepository } from 'typeorm';

import Donate from '../../models/Donate';

class ListAllDonateService {
  public async execute(): Promise<Donate[]> {
    const donateRepository = getRepository(Donate);
    const donates = await donateRepository.find({
      where: { status_donate: 'pending' },
      relations: ['tag'],
    });

    return donates;
  }
}

export default ListAllDonateService;
