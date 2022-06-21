import { Repository } from 'typeorm';
import File from '../../models/File';
 
@Injectable()
class FilesService {
  constructor(
    @InjectRepository(File)
    private filesRepository: Repository<File>,
  ) {}
 
  async uploadDatabaseFile(dataBuffer: Buffer, filename: string) {
    const newFile = await this.filesRepository.create({
      filename,
      data: dataBuffer
    })
    await this.filesRepository.save(newFile);
    return newFile;
  }
 
  async getFileById(fileId: number) {
    const file = await this.filesRepository.findOne(fileId);
    if (!file) {
      throw new NotFoundException();
    }
    return file;
  }
}
 
export default FilesService;