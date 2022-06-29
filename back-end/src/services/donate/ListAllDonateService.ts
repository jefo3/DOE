import { FindManyOptions, getRepository } from 'typeorm';
import { Not } from "typeorm";

import Donate from '../../models/Donate';

interface IDonateRepository{
  find(options?: FindManyOptions<Donate> | undefined): Promise<Donate[]>
}

class ListAllDonateService {

  constructor(private donateRepository: IDonateRepository){}

  public async execute(user_id: string): Promise<Donate[]> {
    const donates = await this.donateRepository.find({
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
