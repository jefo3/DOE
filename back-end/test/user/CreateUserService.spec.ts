import CreateUserService from "../../src/services/user/CreateUserService"
import { userRepositoryInMemory } from "./mocks/CreateUserServiceMock";

describe('User', () => {
  let createUserService: CreateUserService;

  beforeEach(() => {
    createUserService = new CreateUserService(userRepositoryInMemory);
    userRepositoryInMemory;
  });

  afterAll(() => {
    jest.clearAllMocks();
  })

  it('should define CreateUserServie', () => {
    expect(createUserService).toBeDefined();
  });

  it('should create a new user', async () => {
    const userInputMock = {
      name: 'Joao',
      surname: 'Carlos',
      email: 'joaocarlos@gmail.com',
      password: 'joaoca123',
    };

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

    userRepositoryInMemory.findOne.mockReturnValue(Promise.resolve(undefined));
    userRepositoryInMemory.create.mockReturnValue(Promise.resolve(userOutputMock));
    userRepositoryInMemory.save.mockReturnValue(Promise.resolve(userOutputMock));

    const response = await createUserService.execute({
      name: userInputMock.name,
      surname: userInputMock.surname,
      email: userInputMock.email,
      password: userInputMock.password,
    });

    expect(response).toEqual(userOutputMock);
    expect(response).toHaveProperty('id');
    expect(response).toHaveProperty('email');
    expect(response.id).toBe('6aa17cb9-592b-498c-ad48-ad32d0636e2c');
    expect(response.name).toStrictEqual(userInputMock.name);
    expect(userRepositoryInMemory.create).toHaveBeenCalled();
    expect(userRepositoryInMemory.save).toHaveBeenCalled();
    expect(userRepositoryInMemory.create).toHaveBeenCalledTimes(1);
    expect(userRepositoryInMemory.save).toHaveBeenCalledTimes(1);
  });

  it('should not create a new user', async () => {
    const userInputMock = {
      name: 'Joao',
      surname: 'Carlos',
      email: 'joaocarlos@gmail.com',
      password: 'joaoca123',
    };

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

    userRepositoryInMemory.findOne.mockReturnValueOnce(Promise.resolve(userOutputMock));

    try {
      await createUserService.execute({ ...userInputMock });
    } catch (error) {
      expect((error as Error).message).toBe('email address already used');
    }
  })
});
