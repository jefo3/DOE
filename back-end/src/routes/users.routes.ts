import { Router } from 'express';
import UserController from '../controllers/UserController';

const users = Router();

const userController = new UserController();

users.post('/', userController.create);
users.put('/:id', userController.update);
users.delete('/:id', userController.delete);
users.get('/', userController.list);

export default users;
