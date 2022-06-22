import { compare, hash } from "bcryptjs";
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

  it('should update name of an user', async () => {
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

    userRepositoryInMemory.findOneOrFail.mockReturnValue(Promise.resolve(userOutputMock));
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

  it('should update surname of an user', async () => {
    const userInputMock = {
      id: '6aa17cb9-592b-498c-ad48-ad32d0636e2c',
      surname: 'Ferreira',
    };

    const userOutputMock = {
      name: "Joao",
      surname: "Ferreira",
      email: "joaocarlos@gmail.com",
      password: "$2a$08$acay3LLE.eiYE0csYI79/eSmiI7J/.RTodbFIhf9g/K1DPMB7GX4K",
      id: "6aa17cb9-592b-498c-ad48-ad32d0636e2c",
      created_at: "2022-06-22T04:29:55.018Z",
      updated_at: "2022-06-22T04:29:55.018Z"
    }

    userRepositoryInMemory.findOneOrFail.mockReturnValue(Promise.resolve(userOutputMock));
    userRepositoryInMemory.save.mockReturnValue(Promise.resolve(userOutputMock));

    const response = await updateUserService.execute({
      ...userInputMock
    });

    expect(response).toEqual(userOutputMock);
    expect(response).toHaveProperty('id');
    expect(response).toHaveProperty('email');
    expect(response.id).toBe('6aa17cb9-592b-498c-ad48-ad32d0636e2c');
    expect(response.surname).toStrictEqual(userInputMock.surname);
    expect(userRepositoryInMemory.save).toHaveBeenCalled();
  });

  it('should update email of an user', async () => {
    const userInputMock = {
      id: '6aa17cb9-592b-498c-ad48-ad32d0636e2c',
      email: 'joao@gmail.com',
    };

    const userOutputMock = {
      name: "Joao",
      surname: "Ferreira",
      email: "joao@gmail.com",
      password: "$2a$08$acay3LLE.eiYE0csYI79/eSmiI7J/.RTodbFIhf9g/K1DPMB7GX4K",
      id: "6aa17cb9-592b-498c-ad48-ad32d0636e2c",
      created_at: "2022-06-22T04:29:55.018Z",
      updated_at: "2022-06-22T04:29:55.018Z"
    }

    userRepositoryInMemory.findOneOrFail.mockReturnValue(Promise.resolve(userOutputMock));
    userRepositoryInMemory.findOne.mockReturnValue(undefined);
    userRepositoryInMemory.save.mockReturnValue(Promise.resolve(userOutputMock));

    const response = await updateUserService.execute({
      ...userInputMock
    });

    expect(response).toEqual(userOutputMock);
    expect(response).toHaveProperty('id');
    expect(response).toHaveProperty('email');
    expect(response.id).toBe('6aa17cb9-592b-498c-ad48-ad32d0636e2c');
    expect(response.email).toStrictEqual(userInputMock.email);
    expect(userRepositoryInMemory.save).toHaveBeenCalled();
  });

  it('should update password of an user', async () => {
    const userInputMock = {
      id: '6aa17cb9-592b-498c-ad48-ad32d0636e2c',
      password: '12345678',
    };

    const hashedPassword = await hash(userInputMock.password, 8);

    const userOutputMock = {
      name: "Joao",
      surname: "Ferreira",
      email: "joao@gmail.com",
      password: hashedPassword,
      id: "6aa17cb9-592b-498c-ad48-ad32d0636e2c",
      created_at: "2022-06-22T04:29:55.018Z",
      updated_at: "2022-06-22T04:29:55.018Z"
    }

    userRepositoryInMemory.findOneOrFail.mockReturnValue(Promise.resolve(userOutputMock));
    userRepositoryInMemory.save.mockReturnValue(Promise.resolve(userOutputMock));

    const response = await updateUserService.execute({
      ...userInputMock
    });

    const comparePassword = await compare(userInputMock.password, hashedPassword);

    expect(response).toEqual(userOutputMock);
    expect(response).toHaveProperty('id');
    expect(response).toHaveProperty('email');
    expect(response.id).toBe('6aa17cb9-592b-498c-ad48-ad32d0636e2c');
    expect(comparePassword).toBeTruthy();
    expect(userRepositoryInMemory.save).toHaveBeenCalled();
  });

  it('should not be able to update an user with invalid id', async () => {
    const userInputMock = {
      id: '-1',
      name: 'Joao',
    };

    userRepositoryInMemory.findOneOrFail.mockReturnValue(undefined);

    try {
      await updateUserService.execute({ ...userInputMock });
    } catch (error) {
      expect((error as Error).message).toBe('user dont exist');
    }
  });

  it('should not be able to update an user with a pre-existent email', async () => {
    const userInputMock = {
      id: '6aa17cb9-592b-498c-ad48-ad32d0636e2c',
      email: 'joao@gmail.com',
    };

    const userOutputMock = {
      name: "Joao",
      surname: "Ferreira",
      email: "joao@gmail.com",
      password: "$2a$08$acay3LLE.eiYE0csYI79/eSmiI7J/.RTodbFIhf9g/K1DPMB7GX4K",
      id: "6aa17cb9-592b-498c-ad48-ad32d0636e2c",
      created_at: "2022-06-22T04:29:55.018Z",
      updated_at: "2022-06-22T04:29:55.018Z"
    }

    userRepositoryInMemory.findOneOrFail.mockReturnValue(Promise.resolve(userOutputMock));
    userRepositoryInMemory.findOne.mockReturnValue(userOutputMock);
    userRepositoryInMemory.save.mockReturnValue(Promise.resolve(userOutputMock));

    try {
      await updateUserService.execute({ ...userInputMock });
    } catch (error) {
      expect((error as Error).message).toBe('email address already used');
    }

  })

  it('should not be able to update an user with invalid email', async () => {
    const userInputMock = {
      id: '6aa17cb9-592b-498c-ad48-ad32d0636e2c',
      email: 'joao.com',
    };

    const userOutputMock = {
      name: "Joao",
      surname: "Ferreira",
      email: "joao@gmail.com",
      password: '$2a$08$acay3LLE.eiYE0csYI79/eSmiI7J/.RTodbFIhf9g/K1DPMB7GX4K',
      id: "6aa17cb9-592b-498c-ad48-ad32d0636e2c",
      created_at: "2022-06-22T04:29:55.018Z",
      updated_at: "2022-06-22T04:29:55.018Z"
    }

    userRepositoryInMemory.findOneOrFail.mockReturnValue(userOutputMock);
    userRepositoryInMemory.findOne.mockReturnValue(undefined);
    userRepositoryInMemory.save.mockImplementation(() => Promise.reject());

    try {
      await updateUserService.execute({ ...userInputMock });
    } catch (error) {
      expect((error as Error).message).toBe('Server internal error, please try again!');
    }
  });

  it('should not be able to update an user with a blank name', async () => {
    const userInputMock = {
      id: '6aa17cb9-592b-498c-ad48-ad32d0636e2c',
      name: '',
    };

    const userOutputMock = {
      name: "Joao",
      surname: "Ferreira",
      email: "joao@gmail.com",
      password: '$2a$08$acay3LLE.eiYE0csYI79/eSmiI7J/.RTodbFIhf9g/K1DPMB7GX4K',
      id: "6aa17cb9-592b-498c-ad48-ad32d0636e2c",
      created_at: "2022-06-22T04:29:55.018Z",
      updated_at: "2022-06-22T04:29:55.018Z"
    }

    userRepositoryInMemory.findOneOrFail.mockReturnValue(userOutputMock);
    userRepositoryInMemory.save.mockImplementation(() => Promise.reject());

    try {
      await updateUserService.execute({ ...userInputMock });
    } catch (error) {
      expect((error as Error).message).toBe('Server internal error, please try again!');
    }
  });

  it('should not be able to update an user with a blank surname', async () => {
    const userInputMock = {
      id: '6aa17cb9-592b-498c-ad48-ad32d0636e2c',
      suruname: '',
    };

    const userOutputMock = {
      name: "Joao",
      surname: "Ferreira",
      email: "joao@gmail.com",
      password: '$2a$08$acay3LLE.eiYE0csYI79/eSmiI7J/.RTodbFIhf9g/K1DPMB7GX4K',
      id: "6aa17cb9-592b-498c-ad48-ad32d0636e2c",
      created_at: "2022-06-22T04:29:55.018Z",
      updated_at: "2022-06-22T04:29:55.018Z"
    }

    userRepositoryInMemory.findOneOrFail.mockReturnValue(userOutputMock);
    userRepositoryInMemory.save.mockImplementation(() => Promise.reject());

    try {
      await updateUserService.execute({ ...userInputMock });
    } catch (error) {
      expect((error as Error).message).toBe('Server internal error, please try again!');
    }
  });

});
