import DeleteUserService from "../../src/services/user/DeleteUserService";
import { userRepositoryInMemory } from "./mocks/DeleteUserServiceMock";

describe('Delete User', () => {

  let deleteUserService: DeleteUserService;

  beforeEach(() => {
    userRepositoryInMemory;
    deleteUserService = new DeleteUserService(userRepositoryInMemory);
  });

  afterAll(() => {
    jest.clearAllMocks();
  })

  it('should be defined deleteUserService', () => {
    expect(deleteUserService).toBeDefined();
  });

  it('should delete an user', async () => {
    const userId = '6aa17cb9-592b-498c-ad48-ad32d0636e2c';

    const userOutputMock = {
      name: "Joao",
      surname: "Carlos",
      email: "joaocarlos@gmail.com",
      password: "$2a$08$acay3LLE.eiYE0csYI79/eSmiI7J/.RTodbFIhf9g/K1DPMB7GX4K",
      image_id: null,
      id: "6aa17cb9-592b-498c-ad48-ad32d0636e2c",
      created_at: "2022-06-22T04:29:55.018Z",
      updated_at: "2022-06-22T04:29:55.018Z"
    }

    userRepositoryInMemory.findOne.mockReturnValue(userOutputMock);
    userRepositoryInMemory.delete.mockReturnValue(userOutputMock);

    const response = await deleteUserService.execute({ id: userId });

    expect(response).toEqual(userOutputMock);
    expect(response).toHaveProperty('id');
    expect(response).toHaveProperty('email');
    expect(response.id).toBe('6aa17cb9-592b-498c-ad48-ad32d0636e2c');
    expect(response.name).toStrictEqual(userOutputMock.name);
    expect(userRepositoryInMemory.findOne).toHaveBeenCalled();
    expect(userRepositoryInMemory.delete).toHaveBeenCalled();
    expect(userRepositoryInMemory.findOne).toHaveBeenCalledTimes(1);
    expect(userRepositoryInMemory.delete).toHaveBeenCalledTimes(1);

  });

  it('should not delete an user with invalid id', async () => {
    const userId = '-1';

    userRepositoryInMemory.findOne.mockReturnValue(undefined);

    try {
      await deleteUserService.execute({ id: userId });
    } catch (error) {
      expect((error as Error).message).toBe(`user doesn't exist`);
    }

  });

  it('should not be able to delete an user when occurr an internal server error', async () => {
    const userId = '6aa17cb9-592b-498c-ad48-ad32d0636e2c';
    const userOutputMock = {
      name: "Joao",
      surname: "Carlos",
      email: "joaocarlos@gmail.com",
      password: "$2a$08$acay3LLE.eiYE0csYI79/eSmiI7J/.RTodbFIhf9g/K1DPMB7GX4K",
      image_id: null,
      id: "6aa17cb9-592b-498c-ad48-ad32d0636e2c",
      created_at: "2022-06-22T04:29:55.018Z",
      updated_at: "2022-06-22T04:29:55.018Z"
    }

    userRepositoryInMemory.findOne.mockReturnValue(userOutputMock);
    userRepositoryInMemory.delete.mockImplementation(() => Promise.reject());

    try {
      await deleteUserService.execute({ id: userId });
    } catch (error) {
      expect((error as Error).message).toBe('Server internal error');
    }

  });

});
