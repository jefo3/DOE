import UpdateUserService from "../../src/services/user/UpdateUserService";
import { userRepositoryInMemory } from "./mocks/CreateUserServiceMock";

describe('Update user', () => {
  let updateUserService: UpdateUserService;

  beforeEach(() => {
    userRepositoryInMemory;
    updateUserService = new UpdateUserService(userRepositoryInMemory);
  });

  afterAll(() => {
    jest.clearAllMocks();
  })

  it('should define CreateUserServie', () => {
    expect(updateUserService).toBeDefined();
  });

  it('should update a user', async () => {
    const userInputMock = {
      id: '6aa17cb9-592b-498c-ad48-ad32d0636e2c',
      name: 'Joao',
    };

    const userOutputMock = {
      name: "Joao",
      surname: "Carlos",
      email: "joaocarlos@gmail.com",
      password: "$2a$08$acay3LLE.eiYE0csYI79/eSmiI7J/.RTodbFIhf9g/K1DPMB7GX4K",
      id: "6aa17cb9-592b-498c-ad48-ad32d0636e2c",
      created_at: "2022-06-22T04:29:55.018Z",
      updated_at: "2022-06-22T04:29:55.018Z"
    }

    userRepositoryInMemory.findOne.mockReturnValue(Promise.resolve(userOutputMock));
    userRepositoryInMemory.save.mockReturnValue(Promise.resolve(userOutputMock));

    const response = await updateUserService.execute({
      ...userInputMock
    });

    expect(response).toEqual(userOutputMock);
    expect(response).toHaveProperty('id');
    expect(response).toHaveProperty('email');
    expect(response.id).toBe('6aa17cb9-592b-498c-ad48-ad32d0636e2c');
    expect(response.name).toStrictEqual(userInputMock.name);
    expect(userRepositoryInMemory.save).toHaveBeenCalled();
    expect(userRepositoryInMemory.save).toHaveBeenCalledTimes(1);
  });
});
