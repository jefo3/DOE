import { getRepository, FindManyOptions } from 'typeorm';

import Donate from '../../models/Donate';

interface IDonateRepository{
  find(options?: FindManyOptions<Donate> | undefined): Promise<Donate[]>
}
class FilterDonateByTitleService {
  constructor(private donateRepository: IDonateRepository){}

  public async execute(title: string): Promise<Donate[]> {
    const donates = await this.donateRepository.find({
      relations: ['tag'],
      where: { title },
    });
    return donates;
  }
}

export default FilterDonateByTitleService;
