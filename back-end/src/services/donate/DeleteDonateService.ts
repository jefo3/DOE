import { getRepository,FindConditions, FindOneOptions, ObjectID} from 'typeorm';

import Donate from '../../models/Donate';

interface Request {
  id: string;
}

interface IDonateRepository{
  findOne(id: string | number | Date | ObjectID | undefined): Promise<Donate>
  delete(id: string | number | Date | ObjectID | string[] | number[] | Date[] | ObjectID[] | FindConditions<Donate>): Promise<Request>
}
class DeleteDonateService {

  constructor(private donateRepository: IDonateRepository){}

  public async execute({ id }: Request): Promise<Donate> {
    // const donateRepository = getRepository(Donate);
    const donate = await this.donateRepository.findOne(id);

    if (!donate) {
      throw new Error('donate dont exist');
    }

    await this.donateRepository.delete(donate.id);

    return donate;
  }
}

export default DeleteDonateService;
