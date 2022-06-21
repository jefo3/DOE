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

test('CT001', async function () {
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
  await apiDelete(`${link}/${newUser.id}`);
});

test('CT002', async function () {
  const chance = new Chance();

  const user = {
    // name: "Vitória",
    surname: 'Moreira',
    email: chance.email({ domain: 'example.com' }),
    password: '12345678',
  };

  expect(await apiPost(link, { ...user })).toBe(400);
});

test('CT003', async function () {
  const chance = new Chance();

  const user = {
    name: 'Vitória',
    // surname: "Moreira",
    email: chance.email({ domain: 'example.com' }),
    password: '12345678',
  };

  expect(await apiPost(link, { ...user })).toBe(400);
});

test('CT004', async function () {
  const user = {
    name: 'Vitória',
    surname: 'Moreira',
    // email: chance.email({ domain: "example.com" }),
    password: '12345678',
  };

  expect(await apiPost(link, { ...user })).toBe(400);
});

// test('CT005', async function () {
//   const user = {
//     name: 'Vitória',
//     surname: 'Moreira',
//     email: 'vivi.com',
//     password: '12345678',
//   };

//   const response = await apiPost<IUserCreate>(link, {
//     ...user,
//   });

//   expect(response).toBe(400);
// });

test('CT006', async function () {
  const chance = new Chance();

  const user = {
    name: 'Vitória',
    surname: 'Moreira',
    email: chance.email({ domain: 'example.com' }),
    password: '1234567',
  };

  const response = await apiPost<IUserCreate>(link, { ...user });

  expect(response).toBe(400);
});

test('CT007', async function () {
  const user = {
    name: 'Vitória',
    surname: 'Moreira',
    email: 'vivi@gmail.com',
    password: '12345678',
  };

  await apiPost(link, { ...user });

  expect(await apiPost(link, { ...user })).toBe(400);
});
