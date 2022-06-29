import UpdateDonateService from "../../src/services/donate/UpdateDonateService";
import { donateRepositoryInMemory } from "./mocks/UpdateDonateMock";

describe('Update donate', () => {
  let updatedonateService: UpdateDonateService;

  beforeEach(() => {
    donateRepositoryInMemory;
    updatedonateService = new UpdateDonateService(donateRepositoryInMemory);
  });

  afterAll(() => {
    jest.clearAllMocks();
  })

  it('should define CreatedonateServie', () => {
    expect(updatedonateService).toBeDefined();
  });

  it('should update title of a donate', async () => {
    const donateInputMock = {
      id: '09e0d5fa-053b-49b0-8682-6a26da85a0e4',
      title: 'feijao camil',
    };

    const donateOutputMock = {
        id: "09e0d5fa-053b-49b0-8682-6a26da85a0e4",
        title: "feijao camil",
        description: "feijao gostoso",
        user_id: "50404b0f-8f1b-4081-9436-da454bf110d2",
        tag_id: "cbe709fa-165a-4497-af7e-918b4ad67d4a",
        status_donate: "pending",
        image: "6aba9b267873f3340233-Procedimento metodologico@2x (2).png",
        created_at: "2022-05-22T20:12:07.335Z",
        dupdated_at: "2022-06-29T04:27:37.620Z"
      }


    donateRepositoryInMemory.findOne.mockReturnValue(Promise.resolve(donateOutputMock));
    donateRepositoryInMemory.save.mockReturnValue(Promise.resolve(donateOutputMock));

    const response = await updatedonateService.execute({
      ...donateInputMock
    });

    expect(response).toEqual(donateOutputMock);
    expect(response).toHaveProperty('id');
    expect(response).toHaveProperty('title');
    expect(response).toHaveProperty('description');
    expect(response).toHaveProperty('user_id');
    expect(response).toHaveProperty('tag_id');
    expect(response).toHaveProperty('status_donate');
    expect(response).toHaveProperty('image');
    expect(response).toHaveProperty('created_at');
    expect(response).toHaveProperty('dupdated_at');
    expect(response.id).toBe(donateInputMock.id);
    expect(response.title).toStrictEqual(donateInputMock.title);
    expect(donateRepositoryInMemory.save).toHaveBeenCalled();
    expect(donateRepositoryInMemory.save).toHaveBeenCalledTimes(1);
  });

  it('should update description of a donate', async () => {
    const donateInputMock = {
      id: "09e0d5fa-053b-49b0-8682-6a26da85a0e4",
      description: "feijao gostoso",
    };

    const donateOutputMock = {
      id: "09e0d5fa-053b-49b0-8682-6a26da85a0e4",
      title: "feijao camil",
      description: "feijao gostoso",
      user_id: "50404b0f-8f1b-4081-9436-da454bf110d2",
      tag_id: "cbe709fa-165a-4497-af7e-918b4ad67d4a",
      status_donate: "pending",
      image: "6aba9b267873f3340233-Procedimento metodologico@2x (2).png",
      created_at: "2022-05-22T20:12:07.335Z",
      dupdated_at: "2022-06-29T04:27:37.620Z"
    }

    donateRepositoryInMemory.findOne.mockReturnValue(Promise.resolve(donateOutputMock));
    donateRepositoryInMemory.save.mockReturnValue(Promise.resolve(donateOutputMock));

    const response = await updatedonateService.execute({
      ...donateInputMock
    });

    expect(response).toEqual(donateOutputMock);
    expect(response).toHaveProperty('id');
    expect(response).toHaveProperty('title');
    expect(response).toHaveProperty('description');
    expect(response).toHaveProperty('user_id');
    expect(response).toHaveProperty('tag_id');
    expect(response).toHaveProperty('status_donate');
    expect(response).toHaveProperty('image');
    expect(response).toHaveProperty('created_at');
    expect(response).toHaveProperty('dupdated_at');
    expect(response.id).toBe(donateInputMock.id);
    expect(response.description).toStrictEqual(donateInputMock.description);
    expect(donateRepositoryInMemory.save).toHaveBeenCalled();
  });

  it('should update tag_id of a donate', async () => {
    const donateInputMock = {
      id: "09e0d5fa-053b-49b0-8682-6a26da85a0e4",
      tag_id: "cbe709fa-165a-4497-af7e-918b4ad67d4a",
    };

    const donateOutputMock = {
      id: "09e0d5fa-053b-49b0-8682-6a26da85a0e4",
      title: "feijao camil",
      description: "feijao gostoso",
      user_id: "50404b0f-8f1b-4081-9436-da454bf110d2",
      tag_id: "cbe709fa-165a-4497-af7e-918b4ad67d4a",
      status_donate: "pending",
      image: "6aba9b267873f3340233-Procedimento metodologico@2x (2).png",
      created_at: "2022-05-22T20:12:07.335Z",
      dupdated_at: "2022-06-29T04:27:37.620Z"
    }

    donateRepositoryInMemory.findOne.mockReturnValue(Promise.resolve(donateOutputMock));
    donateRepositoryInMemory.save.mockReturnValue(Promise.resolve(donateOutputMock));

    const response = await updatedonateService.execute({
      ...donateInputMock
    });

    expect(response).toEqual(donateOutputMock);
    expect(response).toHaveProperty('id');
    expect(response).toHaveProperty('title');
    expect(response).toHaveProperty('description');
    expect(response).toHaveProperty('user_id');
    expect(response).toHaveProperty('tag_id');
    expect(response).toHaveProperty('status_donate');
    expect(response).toHaveProperty('image');
    expect(response).toHaveProperty('created_at');
    expect(response).toHaveProperty('dupdated_at');
    expect(response.id).toBe(donateInputMock.id);
    expect(response.tag_id).toStrictEqual(donateInputMock.tag_id);
    expect(donateRepositoryInMemory.save).toHaveBeenCalled();
  });

  it('should update status_donate of a donate', async () => {
    const donateInputMock = {
      id: "09e0d5fa-053b-49b0-8682-6a26da85a0e4",
      status_donate: "pending",
    };

    const donateOutputMock = {
      id: "09e0d5fa-053b-49b0-8682-6a26da85a0e4",
      title: "feijao camil",
      description: "feijao gostoso",
      user_id: "50404b0f-8f1b-4081-9436-da454bf110d2",
      tag_id: "cbe709fa-165a-4497-af7e-918b4ad67d4a",
      status_donate: "pending",
      image: "6aba9b267873f3340233-Procedimento metodologico@2x (2).png",
      created_at: "2022-05-22T20:12:07.335Z",
      dupdated_at: "2022-06-29T04:27:37.620Z"
    }

    donateRepositoryInMemory.findOne.mockReturnValue(Promise.resolve(donateOutputMock));
    donateRepositoryInMemory.save.mockReturnValue(Promise.resolve(donateOutputMock));

    const response = await updatedonateService.execute({
      ...donateInputMock
    });

    expect(response).toEqual(donateOutputMock);
    expect(response).toHaveProperty('id');
    expect(response).toHaveProperty('title');
    expect(response).toHaveProperty('description');
    expect(response).toHaveProperty('user_id');
    expect(response).toHaveProperty('tag_id');
    expect(response).toHaveProperty('status_donate');
    expect(response).toHaveProperty('image');
    expect(response).toHaveProperty('created_at');
    expect(response).toHaveProperty('dupdated_at');
    expect(response.id).toBe(donateInputMock.id);
    expect(response.status_donate).toStrictEqual(donateInputMock.status_donate);
    expect(donateRepositoryInMemory.save).toHaveBeenCalled();
  });

  it('should not be able to update a donate with invalid id', async () => {
    const donateInputMock = {
      id: '-1',
      name: 'Joao',
    };

    donateRepositoryInMemory.findOne.mockReturnValue(undefined);

    try {
      await updatedonateService.execute({ ...donateInputMock });
    } catch (error) {
      expect((error as Error).message).toBe('donate dont exist');
    }
  });

});
