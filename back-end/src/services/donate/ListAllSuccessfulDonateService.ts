import { getRepository } from 'typeorm';

import Donate from '../../models/Donate';

class ListAllSuccessfulDonateService {
  public async execute(user_id: string): Promise<Donate[]> {
    const donateRepository = getRepository(Donate);
    const donates = await donateRepository.find({
      where: { status_donate: 'success', user_id},
      relations: ['tag'],
    });

    return donates;
  }
}

export default ListAllSuccessfulDonateService;
