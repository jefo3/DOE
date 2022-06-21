import { getRepository } from 'typeorm';
import { MYFile } from '../../models/MYFile';

interface Request {
  id: string;
  name: string,
  data: Buffer,
  mimeType: string;
}

class UpdateTagService {
  public async execute({ id, name, data, mimeType }: Request): Promise<MYFile> {
    const fileRepository = getRepository(MYFile);
    const file = await fileRepository.findOne(id);

    if (!file) {
      throw new Error('File dont exist');
    }

    const files = await fileRepository.save({
      name,
      data,
      mimeType
    });

    return files;
  }
}

export default UpdateTagService;
