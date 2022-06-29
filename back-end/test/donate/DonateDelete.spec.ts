import DeleteDonateService from "../../src/services/donate/DeleteDonateService";
import { donateRepositoryInMemory } from "./mocks/DeleteDonateMock";

describe('Delete donate', () => {

  let deleteDonateService: DeleteDonateService;

  beforeEach(() => {
    donateRepositoryInMemory;
    deleteDonateService = new DeleteDonateService(donateRepositoryInMemory);
  });

  afterAll(() => {
    jest.clearAllMocks();
  })

  it('should be defined deleteDonateService', () => {
    expect(deleteDonateService).toBeDefined();
  });

  it('should delete a donate', async () => {
    const donateId = '6aa17cb9-592b-498c-ad48-ad32d0636e2c';

    const donateOutputMock = {
      id: "6aa17cb9-592b-498c-ad48-ad32d0636e2c",
      title: "bola azul",
      description: "Bola azul novinha",
      user_id: "50404b0f-8f1b-4081-9436-da454bf110d2",
      tag_id: "b5e67b99-8468-4525-a9e6-a6fb8a591538",
      status_donate: "peding",
      image: null,
      created_at: "2022-05-23T05:02:22.563Z",
      updated_at: "2022-05-23T05:02:22.563Z"
    }

    donateRepositoryInMemory.findOne.mockReturnValue(donateOutputMock);
    donateRepositoryInMemory.delete.mockReturnValue(donateOutputMock);

    const response = await deleteDonateService.execute({ id: donateId });

    expect(response).toEqual(donateOutputMock);
    expect(response).toHaveProperty('id');
    expect(response).toHaveProperty('title');
    expect(response).toHaveProperty('description');
    expect(response).toHaveProperty('user_id');
    expect(response).toHaveProperty('tag_id');
    expect(response).toHaveProperty('status_donate');
    expect(response).toHaveProperty('image');
    expect(response).toHaveProperty('created_at');
    expect(response).toHaveProperty('updated_at');
    expect(response.id).toBe(donateOutputMock.id);
    expect(donateRepositoryInMemory.findOne).toHaveBeenCalled();
    expect(donateRepositoryInMemory.delete).toHaveBeenCalled();
    expect(donateRepositoryInMemory.findOne).toHaveBeenCalledTimes(1);
    expect(donateRepositoryInMemory.delete).toHaveBeenCalledTimes(1);

  });

  it('should not delete a donate with invalid id', async () => {
    const donateId = '-1';

    donateRepositoryInMemory.findOne.mockReturnValue(undefined);

    try {
      await deleteDonateService.execute({ id: donateId });
    } catch (error) {
      expect((error as Error).message).toBe(`donate dont exist`);
    }

  });

});
