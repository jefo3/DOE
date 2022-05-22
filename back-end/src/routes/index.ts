import { Router } from 'express';

import users from './users.routes';
import donates from './donates.routes';

const routes = Router();

routes.use('/users', users);
routes.use('/donates', donates);

export default routes;
