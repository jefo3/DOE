import { getRepository } from 'typeorm';
import { MYFile } from '../../models/MYFile';

interface Request {
  id: string;
}

class DeleteFileService {
  public async execute({ id }: Request): Promise<MYFile> {
    const FileRepository = getRepository(MYFile);
    const file = await FileRepository.findOne(id);

    if (!file) {
      throw new Error('File dont exist');
    }

    await FileRepository.delete(file.id);

    return file;
  }
}

export default DeleteFileService;
