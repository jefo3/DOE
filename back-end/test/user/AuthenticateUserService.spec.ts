import AutenticateUserService from "../../src/services/AutenticateUserService";
import { userRepositoryInMemory, compare, sign } from './mocks/AuthenticateUserServiceMock';


describe('Authenticate User', () => {
  let authenticateUserService: AutenticateUserService;

  beforeAll(() => {
    authenticateUserService = new AutenticateUserService(userRepositoryInMemory, compare, sign);
  });

  afterAll(() => {
    jest.clearAllMocks();
  })

  it('should define authenticateUserService', () => {
    expect(authenticateUserService).toBeDefined();
  });

  it('should create a session', async () => {
    const inputMock = {
      email: 'user@gmail.com',
      password: 'password123'
    };

    const outputUserMock = {
      id: "6d775a87-ddf9-4c6d-b4fd-9dc2fec65ebe",
        name: "User",
        surname: "User Surname",
        email: "user@gmail.com",
        password: "$2a$08$LP1DnYtUgEsSxjNSggO7B./dD5xOyQqEHvk52Mcg7MGMVjQVpcNwW",
        created_at: "2022-06-22T22:36:56.372Z",
        updated_at: "2022-06-22T22:36:56.372Z"
    }

    const outputToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTYwMDI3NDYsImV4cCI6MTY1NjA4OTE0Niwic3ViIjoiNmQ3NzVhODctZGRmOS00YzZkLWI0ZmQtOWRjMmZlYzY1ZWJlIn0.JnL9G_QZF1gLB9uZ_PA7ApX23c_TrDWgH29drk7Bi6c";

    const outputSessionMock = {
      user: {
        id: "6d775a87-ddf9-4c6d-b4fd-9dc2fec65ebe",
        name: "User",
        surname: "User Surname",
        email: "user@gmail.com",
        password: "$2a$08$LP1DnYtUgEsSxjNSggO7B./dD5xOyQqEHvk52Mcg7MGMVjQVpcNwW",
        created_at: "2022-06-22T22:36:56.372Z",
        updated_at: "2022-06-22T22:36:56.372Z"
      },
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTYwMDI3NDYsImV4cCI6MTY1NjA4OTE0Niwic3ViIjoiNmQ3NzVhODctZGRmOS00YzZkLWI0ZmQtOWRjMmZlYzY1ZWJlIn0.JnL9G_QZF1gLB9uZ_PA7ApX23c_TrDWgH29drk7Bi6c"
    }

    userRepositoryInMemory.findOne.mockReturnValue(outputUserMock);
    compare.mockReturnValue(true);
    sign.mockReturnValue(outputToken);

    const response = await authenticateUserService.execute({ ...inputMock });

    expect(response).toEqual(outputSessionMock);
    expect(response.user).toHaveProperty('id');
    expect(response.user).toHaveProperty('email');
    expect(response).toHaveProperty('user');
    expect(response).toHaveProperty('token');
    expect(response.user.email).toStrictEqual(inputMock.email);
    expect(userRepositoryInMemory.findOne).toHaveBeenCalled();
    expect(compare).toHaveBeenCalled();
    expect(sign).toHaveBeenCalled();
    expect(userRepositoryInMemory.findOne).toHaveBeenCalledTimes(1);
    expect(compare).toHaveBeenCalledTimes(1);
    expect(sign).toHaveBeenCalledTimes(1);
  });

  it('should not create a session with invalid credentials (email)', async () => {
    const inputMock = {
      email: 'invalidemail@gmail.com',
      password: 'password123'
    };

    userRepositoryInMemory.findOne.mockReturnValue(undefined);

    try {
      await authenticateUserService.execute({ ...inputMock });
    } catch (error) {
      expect((error as Error).message).toBe('Incorrect email/password combination');
    }
  });

  it('should not create a session with invalid credentials (password)', async () => {
    const inputMock = {
      email: 'user@gmail.com',
      password: 'invalidpassword'
    };

    const outputUserMock = {
      id: "6d775a87-ddf9-4c6d-b4fd-9dc2fec65ebe",
      name: "User",
      surname: "User Surname",
      email: "user@gmail.com",
      password: "$2a$08$LP1DnYtUgEsSxjNSggO7B./dD5xOyQqEHvk52Mcg7MGMVjQVpcNwW",
      created_at: "2022-06-22T22:36:56.372Z",
      updated_at: "2022-06-22T22:36:56.372Z"
    }

    userRepositoryInMemory.findOne.mockReturnValue(outputUserMock);
    compare.mockReturnValue(false);

    try {
      await authenticateUserService.execute({ ...inputMock });
    } catch (error) {
      expect((error as Error).message).toBe('Incorrect email/password combination');
    }
  });

});
