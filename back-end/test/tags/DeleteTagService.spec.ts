import DeleteTagService from "../../src/services/tag/DeleteTagService";
import { tagRepositoryInMemory } from "./mock/DeleteTagService";

describe('Create Tag', () => {
  let deleteTagService: DeleteTagService;

  beforeEach(() => {
    deleteTagService = new DeleteTagService(tagRepositoryInMemory);
  });

  afterAll(() => {
    jest.clearAllMocks();
  })

  it('should define CreateUpdateService', () => {
    expect(deleteTagService).toBeDefined();
  });

  it('should delete a tag', async () => {
    const tagId = "0efecf7b-fe5b-4d44-907a-9a60cd11692f";

    const tagOutputMock = {
      name: "Utensílios",
      id: "0efecf7b-fe5b-4d44-907a-9a60cd11692f",
      created_at: "2022-06-29T16:11:33.808Z",
      updated_at: "2022-06-29T16:11:33.808Z"
    }

    tagRepositoryInMemory.findOne.mockReturnValue(tagOutputMock);
    tagRepositoryInMemory.delete.mockReturnValue(tagOutputMock);

    const response = await deleteTagService.execute({ id: tagId });

    expect(response).toEqual(tagOutputMock);
    expect(tagRepositoryInMemory.findOne).toHaveBeenCalled();
    expect(tagRepositoryInMemory.delete).toHaveBeenCalled();
    expect(tagRepositoryInMemory.findOne).toHaveBeenCalledTimes(1);
    expect(tagRepositoryInMemory.delete).toHaveBeenCalledTimes(1);
  });

  it('should not delete a tag with invalid id', async () => {
    const tagId = "-1";

    tagRepositoryInMemory.findOne.mockReturnValue(undefined);

    try {
      await deleteTagService.execute({ id: tagId });
    } catch (error) {
      expect((error as Error).message).toBe('Tag dont exist');
    }

  });

  it('should not delete a tag when occur an internal server error', async () => {
    const tagId = "0efecf7b-fe5b-4d44-907a-9a60cd11692f";

    tagRepositoryInMemory.findOne.mockImplementation(() => Promise.reject());
    tagRepositoryInMemory.delete.mockImplementation(() => Promise.reject());

    try {
      await deleteTagService.execute({ id: tagId });
    } catch (error) {
      expect((error as Error).message).toBe('Internal server error');
    }

  });

});
