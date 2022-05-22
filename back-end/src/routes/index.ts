import { Router } from 'express';

import users from './users.routes';
import donates from './donates.routes';
import sessions from './sessions.routes';

const routes = Router();

routes.use('/users', users);
routes.use('/donates', donates);
routes.use('/sessions', sessions);

export default routes;
