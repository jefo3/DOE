import { Router } from 'express';

import users from './users.routes';

const routes = Router();

routes.use('/users', users);

export default routes;
