import { Router } from 'express';
import DonateController from '../controllers/DonateController';

const donates = Router();

const donateController = new DonateController();

donates.post('/:user_id', donateController.create);
donates.get('/:user_id', donateController.list);
donates.put('/:id', donateController.update);
donates.delete('/:id', donateController.delete);

export default donates;
