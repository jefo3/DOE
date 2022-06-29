import ListUserService from "../../src/services/user/ListUserService";
import { userRepositoryInMemory } from "./mocks/ListUserServiceMock";

describe('List User', () => {
  let listUserService: ListUserService;

  beforeEach(() => {
    listUserService = new ListUserService(userRepositoryInMemory);
  });

  afterAll(() => {
    jest.clearAllMocks();
  })

  it('should define CreateUserServie', () => {
    expect(ListUserService).toBeDefined();
  });

  it('should list all users', async () => {
    const outputUsersMock = [
      {
        "id": "c012fa14-1ec3-4a87-b46e-8e82ccd2d4fa",
        "name": "Jeferson",
        "surname": "Carlos",
        "email": "jeferson@gmail.com",
        "password": "$2a$08$r0ENMj5og57YRrlQtkkkiuQpcypbU3LqJQXj6StjNiE1LpF6PsWuO",
        "created_at": "2022-06-22T21:36:28.795Z",
        "updated_at": "2022-06-22T21:36:28.795Z"
      },
      {
        "id": "6d775a87-ddf9-4c6d-b4fd-9dc2fec65ebe",
        "name": "Bento",
        "surname": "Gabriel Caio Baptista",
        "email": "bento.gabriel.baptista@athos.srv.br",
        "password": "$2a$08$LP1DnYtUgEsSxjNSggO7B./dD5xOyQqEHvk52Mcg7MGMVjQVpcNwW",
        "created_at": "2022-06-22T22:36:56.372Z",
        "updated_at": "2022-06-22T22:36:56.372Z"
      },
      {
        "id": "b7caad6c-47ff-41d9-8561-78ab07f3f686",
        "name": "Carlos",
        "surname": "Souza",
        "email": "carlos@gmail.com",
        "password": "$2a$08$f/1HatwsDRdJnOmsNDgco.sXc2ZqgQptfqQNH0B90K.fpdMe05dRa",
        "created_at": "2022-06-23T00:39:14.579Z",
        "updated_at": "2022-06-23T00:39:14.579Z"
      },
      {
        "id": "487f532f-f8c1-427b-9728-70a14e5d1979",
        "name": "João",
        "surname": "Ferreira",
        "email": "joao@gmail.com",
        "password": "$2a$08$EAaDLpA2Jdc5gpyMTYPIl.wac9AEKrZLt35lqiyB8R9RfLX8BsnAC",
        "created_at": "2022-06-23T00:09:58.974Z",
        "updated_at": "2022-06-28T15:04:52.002Z"
      }
    ];

    userRepositoryInMemory.find.mockReturnValue(outputUsersMock);

    const response  = await listUserService.execute();

    expect(response).toEqual(outputUsersMock);
    expect(userRepositoryInMemory.find).toHaveBeenCalled();
    expect(userRepositoryInMemory.find).toHaveBeenCalledTimes(1);
  });

  it('should not be able to list all user when occur an internal server error', async () => {
    userRepositoryInMemory.find.mockImplementation(() => Promise.reject());

    try {
      await listUserService.execute();
    } catch (error) {
      expect((error as Error).message).toBe('Internal server error, please try again');
    }
  });

});
