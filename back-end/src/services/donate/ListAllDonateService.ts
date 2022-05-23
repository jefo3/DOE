import { getRepository } from 'typeorm';

import Donate from '../../models/Donate';

class ListAllDonateService {
  public async execute(): Promise<Donate[]> {
    const donateRepository = getRepository(Donate);
    const donates = await donateRepository.find({
      relations: ['tag'],
    });

    return donates;
  }
}

export default ListAllDonateService;
