import { Router } from 'express';
import FileController from '../controllers/FileController';

const files = Router();

const filesController = new FileController();

files.post('/', filesController.create);
files.put('/:id', filesController.update);
files.delete('/:id', filesController.delete);
files.get('/:id', filesController.listById);

export default files;
