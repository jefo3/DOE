import { Router } from 'express';
import TagController from '../controllers/TagController';

const tags = Router();

const tagController = new TagController();

tags.post('/', tagController.create);
tags.put('/:id', tagController.update);
tags.delete('/:id', tagController.delete);
tags.get('/', tagController.list);

export default tags;
