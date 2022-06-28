import { getRepository } from 'typeorm';

import Donate from '../../models/Donate';

class FilterDonateByTitleService {
  public async execute(title: string): Promise<Donate[]> {
    const donateRepository = getRepository(Donate);
    const donates = await donateRepository.find({
      relations: ['tag'],
      where: { title },
    });
    return donates;
  }
}

export default FilterDonateByTitleService;
