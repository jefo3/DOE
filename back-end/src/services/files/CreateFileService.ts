import { getRepository } from 'typeorm';
import { MYFile } from '../../models/MYFile';

interface Request {
  name: string,
  data: Buffer,
  mimeType: string;
}

class CreateFileService {
  public async execute({
    name,
    data,
    mimeType
  }: Request): Promise<MYFile> {
    const FileRepository = getRepository(MYFile);

    const Files = FileRepository.create({
      name,
      data,
      mimeType
    });

    await FileRepository.save(Files);

    return Files;
  }
}

export default CreateFileService;
