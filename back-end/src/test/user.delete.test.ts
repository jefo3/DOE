import { AxiosError } from 'axios';
import { Chance } from 'chance';
import { apiDelete, apiPost } from './api';

const link = 'users/';

interface IUserCreate {
  name: string;
  surname: string;
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

test('CT020', async function () {
  const chance = new Chance();

  const user: IUserCreate = {
    name: 'Vitória',
    surname: 'Moreira',
    email: chance.email({ domain: 'example.com' }),
    password: '12345678',
  };

  const response = (await apiPost<IUserCreate>(link, {
    ...user,
  })) as CreateUserResponse;

  const newUser = response.data;
  expect(response.status).toBe(200);

  const deleteUserResponse = await apiDelete(`${link}${newUser.id}`);
  expect(deleteUserResponse).toBeTruthy();
});

test('CT021', async function () {
  const deleteUserResponse = await apiDelete(`${link}-1`);
  expect(deleteUserResponse).toBe(400);
});

test('CT022', async function () {
  const chance = new Chance();

  const user: IUserCreate = {
    name: 'Vitória',
    surname: 'Moreira',
    email: chance.email({ domain: 'example.com' }),
    password: '12345678',
  };

  const user2: IUserCreate = {
    name: 'João',
    surname: 'Carlos',
    email: chance.email({ domain: 'example.com' }),
    password: '87654321',
  };

  const responseUser = (await apiPost<IUserCreate>(link, {
    ...user,
  })) as CreateUserResponse;

  const responseUser2 = (await apiPost<IUserCreate>(link, {
    ...user2,
  })) as CreateUserResponse;

  const createdUser = responseUser.data;
  const createdUser2 = responseUser2.data;

  expect(responseUser.status).toBe(200);
  expect(responseUser2.status).toBe(200);

  const deleteUserResponse = await apiDelete(`${link}2`);
  expect(deleteUserResponse).toBe(400);

  await apiDelete(`${link}${responseUser.data.id}`);
  await apiDelete(`${link}${responseUser2.data.id}`);
});
