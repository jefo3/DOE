import { Router } from 'express';
import DonateController from '../controllers/DonateController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import multer from 'multer';
import uploadConfig from '../config/upload';

const donates = Router();

const donateController = new DonateController();
const upload = multer(uploadConfig);

donates.use(ensureAuthenticated);

donates.post('/', donateController.create);
donates.get('/', donateController.list);
donates.put('/:id', donateController.update);
donates.delete('/:id', donateController.delete);

donates.get('/feed', donateController.listAll);
donates.get('/feed/success', donateController.listAllSuccessfull);
donates.get('/feed/:tag_id', donateController.filterTag);
donates.get('/donate/:title', donateController.filterByTitle);

donates.patch('/image/:id', upload.single('teste'), donateController.addImage)
export default donates;
