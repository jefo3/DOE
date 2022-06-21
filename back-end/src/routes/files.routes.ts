import { Router } from 'express';
import FileController from '../controllers/FileController';

const files = Router();

const filesController = new FileController();

files.post('/upload', filesController.create);
files.put('/file/:id', filesController.update);
files.delete('/:id', filesController.delete);
files.get('/file/:id', filesController.listById);

export default files;
