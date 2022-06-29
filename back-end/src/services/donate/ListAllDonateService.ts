import { getRepository } from 'typeorm';
import { Not } from "typeorm";

import Donate from '../../models/Donate';

class ListAllDonateService {
  public async execute(user_id: string): Promise<Donate[]> {
    const donateRepository = getRepository(Donate);
    const donates = await donateRepository.find({
      where: { 
        user_id: Not(user_id),
        status_donate: 'pending',
      },
      relations: ['tag'],
    });

    return donates;
  }
}

export default ListAllDonateService;
