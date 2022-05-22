import { Router } from 'express';

import SessionController from '../controllers/SessionController';

const sessions = Router();
const sessionsController = new SessionController();

sessions.post('/', sessionsController.create);

export default sessions;
