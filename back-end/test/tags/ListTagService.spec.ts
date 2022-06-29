import ListTagService from "../../src/services/tag/ListTagService";
import { tagRepositoryInMemory } from "./mock/ListTagService";

describe('List Tag', () => {
  let listTagService: ListTagService;

  beforeEach(() => {
    listTagService = new ListTagService(tagRepositoryInMemory);
  });

  afterAll(() => {
    jest.clearAllMocks();
  })

  it('should define ListTagService', () => {
    expect(listTagService).toBeDefined();
  });

  it('should list all tags availables', async () => {
    const tagsAvailablesMock = [
      {
        id: "137e4287-ea35-4fa6-81ce-423bd10242c2",
        name: "Calçados",
        created_at: "2022-06-22T10:03:29.616Z",
        updated_at: "2022-06-22T10:03:29.616Z"
      },
      {
        id: "b74e1b96-d4be-440b-a5b2-f85b32952a8a",
        name: "Acessórios",
        created_at: "2022-06-22T22:34:39.147Z",
        updated_at: "2022-06-22T22:34:39.147Z"
      },
      {
        id: "8f64fa4a-418a-4ae2-abdd-235a73fdc3d3",
        name: "Itens de casa",
        created_at: "2022-06-22T22:39:13.657Z",
        updated_at: "2022-06-22T22:39:13.657Z"
      },
      {
        id: "0efecf7b-fe5b-4d44-907a-9a60cd11692f",
        name: "Utensílios",
        created_at: "2022-06-29T16:11:33.808Z",
        updated_at: "2022-06-29T16:11:33.808Z"
      }
    ];

    tagRepositoryInMemory.find.mockReturnValue(tagsAvailablesMock);

    const response = await listTagService.execute();

    expect(response).toEqual(tagsAvailablesMock);
    expect(response.length).toEqual(4);

  });

  it('should not be able to list all tags when occur an internal server error', async () => {
    tagRepositoryInMemory.find.mockImplementation(() => Promise.reject());

    try {
      await listTagService.execute();
    } catch (error) {
      expect((error as Error).message).toBe('Internal server error');
    }
  });

});
