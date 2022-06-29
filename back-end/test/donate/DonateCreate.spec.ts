import CreateDonateService from "../../src/services/donate/CreateDonateService"
import { donateRepositoryInMemory } from "./mocks/CreateDonateMock";

describe('Create donate', () => {
  let createDonateService: CreateDonateService;

  beforeEach(() => {
    createDonateService = new CreateDonateService (donateRepositoryInMemory);
    donateRepositoryInMemory;
  });

  afterAll(() => {
    jest.clearAllMocks();
  })

  it('should define createDonateServie', () => {
    expect(createDonateService).toBeDefined();
  });

  it('should create a new donate', async () => {
    const donateInputMock = {
      title: "farofa 2",
      description: "feijao gostoso demais bem demais",
      user_id: "50404b0f-8f1b-4081-9436-da454bf110d2",
      tag_id: "b5e67b99-8468-4525-a9e6-a6fb8a591538",
      status_donate: "doado",
    };

    const donateOutputMock = {
      title: "farofa 2",
      description: "feijao gostoso demais bem demais",
      user_id: "50404b0f-8f1b-4081-9436-da454bf110d2",
      tag_id: "b5e67b99-8468-4525-a9e6-a6fb8a591538",
      status_donate: "doado",
      id: "8e9c96dd-2299-4aca-b4c5-2938d240cc5d",
      created_at: "2022-05-24T18:30:54.376Z",
      updated_at: "2022-05-24T18:30:54.376Z"
    }

    donateRepositoryInMemory.create.mockReturnValue(Promise.resolve(donateOutputMock));
    donateRepositoryInMemory.save.mockReturnValue(Promise.resolve(donateOutputMock));

    const response = await createDonateService.execute({
      title: donateInputMock.title,
      description: donateInputMock.description,
      user_id: donateInputMock.user_id,
      tag_id: donateInputMock.tag_id,
      status_donate: donateInputMock.status_donate,
    });

    expect(response).toEqual(donateOutputMock);
    expect(response).toHaveProperty('user_id');
    expect(response).toHaveProperty('tag_id');
    expect(response).toHaveProperty('status_donate')
    expect(response).toHaveProperty('id')
    expect(response.id).toBe('8e9c96dd-2299-4aca-b4c5-2938d240cc5d');
    expect(response.user_id).toStrictEqual(donateInputMock.user_id);
    expect(response.tag_id).toStrictEqual(donateInputMock.tag_id);
    expect(response.status_donate).toStrictEqual(donateInputMock.status_donate);
    expect(donateRepositoryInMemory.create).toHaveBeenCalled();
    expect(donateRepositoryInMemory.save).toHaveBeenCalled();
    expect(donateRepositoryInMemory.create).toHaveBeenCalledTimes(1);
    expect(donateRepositoryInMemory.save).toHaveBeenCalledTimes(1);
  });

  it('should not create a new donate', async () => {
    const donateInputMock = {
      title: "farofa 2",
      description: "feijao gostoso demais bem demais",
      user_id: "50404b0f-8f1b-4081-9436-da454bf110d2",
      tag_id: "b5e67b99-8468-4525-a9e6-a6fb8a591538",
      status_donate: "doado",
    };

    const donateOutputMock = {
      title: "farofa 2",
      description: "feijao gostoso demais bem demais",
      user_id: "50404b0f-8f1b-4081-9436-da454bf110d2",
      tag_id: "b5e67b99-8468-4525-a9e6-a6fb8a591538",
      status_donate: "doado",
      id: "8e9c96dd-2299-4aca-b4c5-2938d240cc5d",
      created_at: "2022-05-24T18:30:54.376Z",
      updated_at: "2022-05-24T18:30:54.376Z"

    }

    donateRepositoryInMemory.create.mockReturnValue(Promise.resolve(donateOutputMock));
    donateRepositoryInMemory.save.mockImplementationOnce(() => Promise.reject());

    try{
      await createDonateService.execute({ ...donateInputMock });
    }catch(error){
      expect((error as Error).message).toBe('Internal server error, please try again');
    }
  });
});
