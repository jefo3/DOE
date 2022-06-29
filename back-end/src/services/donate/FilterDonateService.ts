import { getRepository } from 'typeorm';
import { Not } from "typeorm";

import Donate from '../../models/Donate';

class FilterDonateService {
  public async execute(tag_id: string, user_id: string): Promise<Donate[]> {
    const donateRepository = getRepository(Donate);
    const donates = await donateRepository.find({
      relations: ['tag'],
      where: { 
        user_id: Not(user_id),
        tag_id,
        status_donate: 'pending',
      },
    });

    return donates;
  }
}

export default FilterDonateService;
