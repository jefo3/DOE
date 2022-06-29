import CreateTagService from "../../src/services/tag/CreateTagService";
import { tagRepositoryInMemory } from "./mock/CreateTagService";

describe('Create Tag', () => {
  let createTagService: CreateTagService;

  beforeEach(() => {
    createTagService = new CreateTagService(tagRepositoryInMemory);
  });

  afterAll(() => {
    jest.clearAllMocks();
  })

  it('should define CreateUpdateService', () => {
    expect(createTagService).toBeDefined();
  });

  it('should create a new tag', async () => {
    const tagInputMock = {
      name: 'Utensílios',
    };

    const tagOutputMock = {
      name: "Utensílios",
      id: "0efecf7b-fe5b-4d44-907a-9a60cd11692f",
      created_at: "2022-06-29T16:11:33.808Z",
      updated_at: "2022-06-29T16:11:33.808Z"
    }

    tagRepositoryInMemory.create.mockReturnValue(Promise.resolve(tagOutputMock));
    tagRepositoryInMemory.save.mockReturnValue(Promise.resolve(tagOutputMock));

    const response = await createTagService.execute({
      name: tagInputMock.name,
    });

    expect(response).toEqual(tagOutputMock);
    expect(response).toHaveProperty('id');
    expect(response).toHaveProperty('name');
    expect(response.id).toBe('0efecf7b-fe5b-4d44-907a-9a60cd11692f');
    expect(response.name).toStrictEqual(tagInputMock.name);
    expect(tagRepositoryInMemory.create).toHaveBeenCalled();
    expect(tagRepositoryInMemory.save).toHaveBeenCalled();
    expect(tagRepositoryInMemory.create).toHaveBeenCalledTimes(1);
    expect(tagRepositoryInMemory.save).toHaveBeenCalledTimes(1);
  });

  it('should not be able to create a new tag when name is empty', async () => {
    const tagInputMock = {
      name: '',
    };

    try {
      await createTagService.execute({ ...tagInputMock });
    } catch (error) {
      expect((error as Error).message).toBe('value empty');
    }

  });

  it('should not be able to create a new user when occur a server internal error', async () => {
    const tagInputMock = {
      name: 'Utensílios',
    };

    tagRepositoryInMemory.create.mockReturnValue(() => Promise.reject());
    tagRepositoryInMemory.save.mockImplementation(() => Promise.reject());

    try {
      await createTagService.execute({ ...tagInputMock });
    } catch (error) {
      expect((error as Error).message).toBe('Internal server error');
    }
  });

});
