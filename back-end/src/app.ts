import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.get('/', routes)

export default app;
