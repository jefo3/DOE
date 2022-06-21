import 'reflect-metadata';
import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import routes from './routes';
import './database';
import './database';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));


export default app;
