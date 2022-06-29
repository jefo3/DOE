import ListAllDonateService from "../../src/services/donate/ListAllDonateService";
import ListAllSucessfulDonateService from '../../src/services/donate/ListAllSuccessfulDonateService'
import FilterDonateByTitleService from "../../src/services/donate/FilterDonateByTitleService";
import FilterDonateService from "../../src/services/donate/FilterDonateService";
import { donateRepositoryInMemory } from "./mocks/ListDonateMocks";

describe('listAll donate', () => {
  let listAllDonateService: ListAllDonateService;

  beforeEach(() => {
    donateRepositoryInMemory;
    listAllDonateService = new ListAllDonateService(donateRepositoryInMemory);
  });

  afterAll(() => {
    jest.clearAllMocks();
  })

it('should list all a donate', async () => {
  const donateInputMock = {
    user_id: "50404b0f-8f1b-4081-9436-da454bf110d2",
  };

  const donateOutputMock = [{
    id: "09e0d5fa-053b-49b0-8682-6a26da85a0e4",
    title: "feijao camil",
    description: "feijao gostoso",
    user_id: "50404b0f-8f1b-4081-9436-da454bf110d2",
    tag_id: "cbe709fa-165a-4497-af7e-918b4ad67d4a",
    status_donate: "pending",
    image: "6aba9b267873f3340233-Procedimento metodologico@2x (2).png",
    created_at: "2022-05-22T20:12:07.335Z",
    dupdated_at: "2022-06-29T04:27:37.620Z"
  }]

  donateRepositoryInMemory.find.mockReturnValue(Promise.resolve(donateOutputMock));

  const response = await listAllDonateService.execute(donateInputMock.user_id);

  expect(response).toEqual(donateOutputMock);
  expect(response[0]).toHaveProperty('id');
  expect(response[0]).toHaveProperty('title');
  expect(response[0]).toHaveProperty('description');
  expect(response[0]).toHaveProperty('user_id');
  expect(response[0]).toHaveProperty('tag_id');
  expect(response[0]).toHaveProperty('status_donate');
  expect(response[0]).toHaveProperty('image');
  expect(response[0]).toHaveProperty('created_at');
  expect(response[0]).toHaveProperty('dupdated_at');
  expect(response).toStrictEqual(donateOutputMock)

  expect(donateRepositoryInMemory.find).toHaveBeenCalled();
});
})

describe('listAllSucces donate', () => {
  let listAllSucessfulDonateService: ListAllSucessfulDonateService;

  beforeEach(() => {
    donateRepositoryInMemory;
    listAllSucessfulDonateService = new ListAllSucessfulDonateService(donateRepositoryInMemory);
  });

  afterAll(() => {
    jest.clearAllMocks();
  })

it('should list all donate with the field status_donate sucess', async () => {
  const donateInputMock = {
    user_id: "50404b0f-8f1b-4081-9436-da454bf110d2",
  };

  const donateOutputMock = [{
    id: "09e0d5fa-053b-49b0-8682-6a26da85a0e4",
    title: "feijao camil",
    description: "feijao gostoso",
    user_id: "50404b0f-8f1b-4081-9436-da454bf110d2",
    tag_id: "cbe709fa-165a-4497-af7e-918b4ad67d4a",
    status_donate: "sucess",
    image: "6aba9b267873f3340233-Procedimento metodologico@2x (2).png",
    created_at: "2022-05-22T20:12:07.335Z",
    dupdated_at: "2022-06-29T04:27:37.620Z"
  }]

  donateRepositoryInMemory.find.mockReturnValue(Promise.resolve(donateOutputMock));

  const response = await listAllSucessfulDonateService.execute(donateInputMock.user_id);

  expect(response).toEqual(donateOutputMock);
  expect(response[0]).toHaveProperty('id');
  expect(response[0]).toHaveProperty('title');
  expect(response[0]).toHaveProperty('description');
  expect(response[0]).toHaveProperty('user_id');
  expect(response[0]).toHaveProperty('tag_id');
  expect(response[0]).toHaveProperty('status_donate');
  expect(response[0]).toHaveProperty('image');
  expect(response[0]).toHaveProperty('created_at');
  expect(response[0]).toHaveProperty('dupdated_at');
  expect(response).toStrictEqual(donateOutputMock)
  expect(response[0].status_donate).toBe("sucess")
  expect(donateRepositoryInMemory.find).toHaveBeenCalled();
});
})

describe('filter donate by title', () => {
  let filterDonateByTitleService: FilterDonateByTitleService;

  beforeEach(() => {
    donateRepositoryInMemory;
    filterDonateByTitleService = new FilterDonateByTitleService(donateRepositoryInMemory);
  });

  afterAll(() => {
    jest.clearAllMocks();
  })

it('should filter donate with field title', async () => {
  const donateInputMock = {
    title: "feijao camil"
  };

  const donateOutputMock = [{
    id: "09e0d5fa-053b-49b0-8682-6a26da85a0e4",
    title: "feijao camil",
    description: "feijao gostoso",
    user_id: "50404b0f-8f1b-4081-9436-da454bf110d2",
    tag_id: "cbe709fa-165a-4497-af7e-918b4ad67d4a",
    status_donate: "pending",
    image: "6aba9b267873f3340233-Procedimento metodologico@2x (2).png",
    created_at: "2022-05-22T20:12:07.335Z",
    dupdated_at: "2022-06-29T04:27:37.620Z"
  }]

  donateRepositoryInMemory.find.mockReturnValue(Promise.resolve(donateOutputMock));

  const response = await filterDonateByTitleService.execute(donateInputMock.title);

  expect(response).toEqual(donateOutputMock);
  expect(response[0]).toHaveProperty('id');
  expect(response[0]).toHaveProperty('title');
  expect(response[0]).toHaveProperty('description');
  expect(response[0]).toHaveProperty('user_id');
  expect(response[0]).toHaveProperty('tag_id');
  expect(response[0]).toHaveProperty('status_donate');
  expect(response[0]).toHaveProperty('image');
  expect(response[0]).toHaveProperty('created_at');
  expect(response[0]).toHaveProperty('dupdated_at');
  expect(response).toStrictEqual(donateOutputMock)
  expect(response[0].title).toBe(donateInputMock.title)
  expect(donateRepositoryInMemory.find).toHaveBeenCalled();
});
})

describe('filter donate by tag', () => {
  let filterDonateService: FilterDonateService;

  beforeEach(() => {
    donateRepositoryInMemory;
    filterDonateService = new FilterDonateService(donateRepositoryInMemory);
  });

  afterAll(() => {
    jest.clearAllMocks();
  })

it('should filter donate with field tag_id', async () => {
  const donateInputMock = {
    user_id: "50404b0f-8f1b-4081-9436-da454bf110d2",
    tag_id: "cbe709fa-165a-4497-af7e-918b4ad67d4a"
  };

  const donateOutputMock = [{
    id: "09e0d5fa-053b-49b0-8682-6a26da85a0e4",
    title: "feijao camil",
    description: "feijao gostoso",
    user_id: "50404b0f-8f1b-4081-9436-da454bf110d2",
    tag_id: "cbe709fa-165a-4497-af7e-918b4ad67d4a",
    status_donate: "pending",
    image: "6aba9b267873f3340233-Procedimento metodologico@2x (2).png",
    created_at: "2022-05-22T20:12:07.335Z",
    dupdated_at: "2022-06-29T04:27:37.620Z"
  }]

  donateRepositoryInMemory.find.mockReturnValue(Promise.resolve(donateOutputMock));

  const response = await filterDonateService.execute( donateInputMock.tag_id, donateInputMock.user_id);

  expect(response).toEqual(donateOutputMock);
  expect(response[0]).toHaveProperty('id');
  expect(response[0]).toHaveProperty('title');
  expect(response[0]).toHaveProperty('description');
  expect(response[0]).toHaveProperty('user_id');
  expect(response[0]).toHaveProperty('tag_id');
  expect(response[0]).toHaveProperty('status_donate');
  expect(response[0]).toHaveProperty('image');
  expect(response[0]).toHaveProperty('created_at');
  expect(response[0]).toHaveProperty('dupdated_at');
  expect(response).toStrictEqual(donateOutputMock)
  expect(response[0].tag_id).toBe(donateInputMock.tag_id)
  expect(donateRepositoryInMemory.find).toHaveBeenCalled();
});
})
