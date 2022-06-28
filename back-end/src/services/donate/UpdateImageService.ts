import { getRepository, FindOneOptions} from 'typeorm';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../../config/upload';

import Donate from '../../models/Donate';

interface Request {
  id: string;
  image: string;
}

interface IDonateRepository{
  findOne(options?: FindOneOptions<Donate | undefined>): Promise<Donate | undefined>;
  save(donate: Request): Promise<Donate>;
}

class UpdateImageService {

  constructor(private donateRepository: IDonateRepository){}

  public async execute({ id, image }: Request): Promise<Donate> {

    const donate = await this.donateRepository.findOne({where: { id }});

    if (!donate) {
      throw new Error('donate dont exist');
    }

    if (donate) {
      const donateImageFilePath = path.join(uploadConfig.directory, donate.image);
      const donateImageFileExists = await fs.promises.stat(donateImageFilePath);

      if (donateImageFileExists) {
        await fs.promises.unlink(donateImageFilePath);
      }
    }

    donate.image = image;

    await this.donateRepository.save(donate);

    return donate;
  }
}

export default UpdateImageService;
