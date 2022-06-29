import { getRepository, FindManyOptions } from 'typeorm';

import Donate from '../../models/Donate';

interface IDonateRepository{
  find(options?: FindManyOptions<Donate> | undefined): Promise<Donate[]>
}

class ListAllSuccessfulDonateService {

  constructor(private donateRepository: IDonateRepository){ }

  public async execute(user_id: string): Promise<Donate[]> {

    const donates = await this.donateRepository.find({
      where: { status_donate: 'success', user_id},
      relations: ['tag'],
    });

    return donates;
  }
}

export default ListAllSuccessfulDonateService;
