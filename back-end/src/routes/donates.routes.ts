import { Router } from 'express';
import DonateController from '../controllers/DonateController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const donates = Router();

const donateController = new DonateController();

donates.use(ensureAuthenticated);

donates.post('/', donateController.create);
donates.get('/', donateController.list);
donates.put('/:id', donateController.update);
donates.delete('/:id', donateController.delete);

donates.get('/feed', donateController.listAll);
donates.get('/feed/success', donateController.listAllSuccessfull);
donates.get('/feed/:tag_id', donateController.filterTag);

export default donates;
