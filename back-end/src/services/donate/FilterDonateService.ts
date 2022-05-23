import { getRepository } from 'typeorm';

import Donate from '../../models/Donate';

class FilterDonateService {
  public async execute(tag_id: string): Promise<Donate[]> {
    const donateRepository = getRepository(Donate);
    const donates = await donateRepository.find({
      relations: ['tag'],
      where: { tag_id },
    });

    return donates;
  }
}

export default FilterDonateService;
