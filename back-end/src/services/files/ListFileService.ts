import { getRepository } from 'typeorm';
import { MYFile } from '../../models/MYFile';

interface Request {
  id: string;
}

class ListFileService {
  public async execute({ id }: Request): Promise<MYFile> {
    const FileRepository = getRepository(MYFile);
    const file = await FileRepository.findOne(id);

    if (!file) {
      throw new Error('File dont exist');
    }
    return file;
  }
}

export default ListFileService;
