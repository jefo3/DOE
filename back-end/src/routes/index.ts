import { Router } from 'express';

import users from './users.routes';
import donates from './donates.routes';
import sessions from './sessions.routes';
import tags from './tags.routes';
import files from './files.routes';

const routes = Router();

routes.use('/users', users);
routes.use('/donates', donates);
routes.use('/sessions', sessions);
routes.use('/tags', tags);
routes.use('/files', files);

export default routes;
