const userRepositoryInMemory = {
  create: jest.fn(),
  save: jest.fn(),
  findOne: jest.fn(),
  findOneOrFail: jest.fn(),
}

export { userRepositoryInMemory }
