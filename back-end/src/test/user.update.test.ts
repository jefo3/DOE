import { AxiosError } from 'axios';
import { compare } from 'bcryptjs';
import { Chance } from 'chance';
import { apiDelete, apiPost, apiUpdate } from './api';

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

type UpdateUserResponse = CreateUserResponse;

test('CT012', async function () {
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

  const updateUserResponse = (await apiUpdate(`${link}${newUser.id}`, {
    name: 'Vivi',
  })) as UpdateUserResponse;

  console.log(updateUserResponse);

  expect(updateUserResponse.status).toBe(200);
  expect(updateUserResponse.data.name).toBe('Vivi');

  await apiDelete(`${link}${newUser.id}`);
});

test('CT013', async function () {
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

  const updateUserResponse = (await apiUpdate(`${link}${newUser.id}`, {
    surname: 'Moreira de Souza',
  })) as UpdateUserResponse;

  expect(updateUserResponse.status).toBe(200);
  expect(updateUserResponse.data.surname).toBe('Moreira de Souza');

  await apiDelete(`${link}${newUser.id}`);
});

test('CT014', async function () {
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

  const updateUserResponse = (await apiUpdate(`${link}${newUser.id}`, {
    email: 'vivi.mores@gmail.com',
  })) as UpdateUserResponse;

  expect(updateUserResponse.status).toBe(200);
  expect(updateUserResponse.data.email).toBe('vivi.mores@gmail.com');

  await apiDelete(`${link}${newUser.id}`);
});

test('CT018', async function () {
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

  const updateUserResponse = (await apiUpdate(`${link}${newUser.id}`, {
    password: '12345678a',
  })) as UpdateUserResponse;

  const comparePasswords = await compare(
    '12345678a',
    updateUserResponse.data.password,
  );

  expect(updateUserResponse.status).toBe(200);
  expect(comparePasswords).toBeTruthy();

  await apiDelete(`${link}${newUser.id}`);
});

test('CT019', async function () {
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

  const updateUserResponse = await apiUpdate(`${link}${newUser.id}`, {
    password: 'aabb',
  });

  expect(updateUserResponse).toBe(400);
  await apiDelete(`${link}${newUser.id}`);
});
