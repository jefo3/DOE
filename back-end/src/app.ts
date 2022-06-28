import 'reflect-metadata';
import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import routes from './routes';
import './database';
import './database';
import uploadConfig from './config/upload';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/files', express.static(uploadConfig.directory))
app.use(routes);

export default app;
