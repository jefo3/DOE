import Donate from '../../models/Donate';
interface Request {
  title: string;
  description: string;
  user_id: string;
  tag_id: string;
  status_donate: string;
}

interface IDonateRepository{
  create(donate: Request): Promise<Donate>;
  save(donate: Request): Promise<Donate>;
}

class CreateDonateService {

  constructor(private donateRepository: IDonateRepository){}

  public async execute({
    title,
    description,
    user_id,
    tag_id,
    status_donate,
  }: Request): Promise<Donate> {
    try{
      const donate = await this.donateRepository.create({
        title,
        description,
        user_id,
        tag_id,
        status_donate,
      });

      await this.donateRepository.save(donate);

      return donate;
    }catch(error){
      if (error as Error) throw error;
      throw new Error('Internal server error, please try again');
    }
  }
}

export default CreateDonateService;
