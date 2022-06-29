import { getRepository, FindManyOptions } from 'typeorm';
import { Not } from "typeorm";

import Donate from '../../models/Donate';

interface IDonateRepository{
  find(options?: FindManyOptions<Donate> | undefined): Promise<Donate[]>
}

class FilterDonateService {
  constructor(private donateRepository: IDonateRepository){}

  public async execute(tag_id: string, user_id: string): Promise<Donate[]> {

    const donates = await this.donateRepository.find({
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
