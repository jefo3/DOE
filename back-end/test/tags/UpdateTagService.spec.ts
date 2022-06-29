import UpdateTagService from "../../src/services/tag/UpdateTagService";
import { tagRepositoryInMemory } from "./mock/UpdateTagService";

describe('Update Tag', () => {
  let updateTagService: UpdateTagService;

  beforeEach(() => {
    updateTagService = new UpdateTagService(tagRepositoryInMemory);
  });

  afterAll(() => {
    jest.clearAllMocks();
  })

  it('should define UpdateUserService', () => {
    expect(updateTagService).toBeDefined();
  });

  it('should update a specific tag', async () => {
    const tagInputMock = {
      id: "0efecf7b-fe5b-4d44-907a-9a60cd11692f",
      name: "Utensílios"
    };

    const tagOutputMock = {
      name: "Utensílios",
      id: "0efecf7b-fe5b-4d44-907a-9a60cd11692f",
      created_at: "2022-06-29T16:11:33.808Z",
      updated_at: "2022-06-29T16:11:33.808Z"
    }

    tagRepositoryInMemory.findOne.mockReturnValue(tagOutputMock);
    tagRepositoryInMemory.save.mockReturnValue(tagOutputMock);

    const response = await updateTagService.execute({ ...tagInputMock });

    expect(response).toEqual(tagOutputMock);

  });

  it('should not be able to update a tag when id is invalid', async () => {
    const tagInputMock = {
      id: "-1",
      name: "Utensílios"
    };

    tagRepositoryInMemory.findOne.mockReturnValue(undefined);

    try {
      await updateTagService.execute({ ...tagInputMock });
    } catch (error) {
      expect((error as Error).message).toBe(`Tag doesn't exist`);
    }

  });

  it('should not be able to update a tag when occur an internal server error', async () => {
    const tagInputMock = {
      id: "0efecf7b-fe5b-4d44-907a-9a60cd11692f",
      name: "Utensílios"
    };

    tagRepositoryInMemory.findOne.mockImplementation(() => Promise.reject());
    tagRepositoryInMemory.save.mockReturnValue(() => Promise.reject());

    try {
      await updateTagService.execute({ ...tagInputMock });
    } catch (error) {
      expect((error as Error).message).toBe('Internal server error!');
    }

  });

});
