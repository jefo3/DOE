import CreateDonateService from "../../src/services/donate/CreateDonateService"
import { donateRepositoryInMemory } from "./mocks/CreateDonateMock";

describe('Donate', () => {
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
    // expect(response).toHaveProperty('id');
    // expect(response).toHaveProperty('email');
    // expect(response.id).toBe('6aa17cb9-592b-498c-ad48-ad32d0636e2c');
    // expect(response.name).toStrictEqual(donateInputMock.name);
    expect(donateRepositoryInMemory.create).toHaveBeenCalled();
    expect(donateRepositoryInMemory.save).toHaveBeenCalled();
    expect(donateRepositoryInMemory.create).toHaveBeenCalledTimes(1);
    expect(donateRepositoryInMemory.save).toHaveBeenCalledTimes(1);
  });

  // it('should not create a new donate', async () => {
  //   const donateInputMock = {
  //     name: 'Joao',
  //     surname: 'Carlos',
  //     email: 'joaocarlos@gmail.com',
  //     password: 'joaoca123',
  //   };

  //   const donateOutputMock = {
  //     name: "Joao",
  //     surname: "Carlos",
  //     email: "joaocarlos@gmail.com",
  //     password: "$2a$08$acay3LLE.eiYE0csYI79/eSmiI7J/.RTodbFIhf9g/K1DPMB7GX4K",
  //     image_id: null,
  //     id: "6aa17cb9-592b-498c-ad48-ad32d0636e2c",
  //     created_at: "2022-06-22T04:29:55.018Z",
  //     updated_at: "2022-06-22T04:29:55.018Z"
  //   }

  //   donateRepositoryInMemory.findOne.mockReturnValueOnce(Promise.resolve(donateOutputMock));

  //   try {
  //     await createDonateService.execute({ ...donateInputMock });
  //   } catch (error) {
  //     expect((error as Error).message).toBe('email address already used');
  //   }
  // })
});