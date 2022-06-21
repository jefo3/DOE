import { AxiosError } from 'axios';
import { Chance } from 'chance';
import api, { apiAuth, apiDelete, apiPost } from './api';

const linkUsers = 'users/';
const linkSessions = 'sessions/';

interface IUserCreate {
  name: string;
  surname: string;
  email: string;
  password: string;
}

interface ICreateSession {
  email: string;
  password: string;
}

interface CreateUserResponse {
  status: number;
  data: {
    id: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    image_id: string;
    created_at: string;
    updated_at: string;
  };
}

interface CreateSessionResponse {
  data: {
    user: {
      id: string;
      name: string;
      surname: string;
      email: string;
      password: string;
      image_id: string;
      created_at: string;
      updated_at: string;
    };
    token: string;
  };
  status: number;
}

test('CT008', async function () {
  const chance = new Chance();

  const user: IUserCreate = {
    name: 'Vitória',
    surname: 'Moreira',
    email: chance.email({ domain: 'example.com' }),
    password: '12345678',
  };

  const responseCreateUser = (await apiPost<IUserCreate>(linkUsers, {
    ...user,
  })) as CreateUserResponse;

  const newUser = responseCreateUser.data;

  const response = (await apiAuth<ICreateSession>(linkSessions, {
    email: user.email,
    password: user.password,
  })) as CreateSessionResponse;

  expect(localStorage.getItem('@App:user')).toBeTruthy();
  expect(response.status).toBe(200);

  await apiDelete(`${linkUsers}/${newUser.id}`);
});

test('CT009', async function () {
  const user = {
    email: 'inexistente@gmail.com',
    password: '12345678',
  };

  const response = await apiAuth(linkSessions, {
    email: user.email,
    password: user.password,
  });

  expect(response).toBe(400);
});

test('CT010', async function () {
  const chance = new Chance();

  const user: IUserCreate = {
    name: 'Vitória',
    surname: 'Moreira',
    email: chance.email({ domain: 'example.com' }),
    password: '12345678',
  };

  const responseCreateUser = (await apiPost<IUserCreate>(linkUsers, {
    ...user,
  })) as CreateUserResponse;

  const newUser = responseCreateUser.data;

  const response = await apiAuth<ICreateSession>(linkSessions, {
    email: user.email,
    password: 'senhaerrada',
  });

  expect(response).toBe(400);

  await apiDelete(`${linkUsers}/${newUser.id}`);
});

test('CT011', async function () {
  const chance = new Chance();

  const user: IUserCreate = {
    name: 'Vitória',
    surname: 'Moreira',
    email: chance.email({ domain: 'example.com' }),
    password: '12345678',
  };

  const responseCreateUser = (await apiPost<IUserCreate>(linkUsers, {
    ...user,
  })) as CreateUserResponse;

  const newUser = responseCreateUser.data;

  const response = await apiAuth<ICreateSession>(linkSessions, {
    email: '',
    password: user.password,
  });

  expect(response).toBe(400);

  await apiDelete(`${linkUsers}/${newUser.id}`);
});
