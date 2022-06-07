import { getRepository } from 'typeorm';

import Donate from '../../models/Donate';

class ListAllSuccessfulDonateService {
  public async execute(): Promise<Donate[]> {
    const donateRepository = getRepository(Donate);
    const donates = await donateRepository.find({
      where: { status_donate: 'success' },
      relations: ['tag'],
    });

    return donates;
  }
}

export default ListAllSuccessfulDonateService;
