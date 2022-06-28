import 'reflect-metadata';
import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import routes from './routes';
import './database';
import './database';
import bodyParser from 'body-parser';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

export default app;
