import { getRepository } from 'typeorm';

import Donate from '../../models/Donate';

interface IDonateRepository{
  find({}): Promise<Donate[]>
}

class ListDonateService {
  constructor(private donateRepository: IDonateRepository){}

  public async execute(user_id: string): Promise<Donate[]> {

    const donates = await this.donateRepository.find({
      where: { user_id },
      relations: ['tag'],
    });

    return donates;
  }
}

export default ListDonateService;
