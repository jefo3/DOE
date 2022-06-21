import { getRepository } from 'typeorm';
import { MYFile } from '../../models/MYFile';

interface Request {
  fileData: Express.Multer.File;
}

class CreateFileService {
  public async execute({
    fileData
  }: Request): Promise<MYFile> {
    const FileRepository = getRepository(MYFile);
    const name = fileData.filename;
    const data = fileData.buffer.toString('base64')
    const mimeType = fileData.mimetype

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
