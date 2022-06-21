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
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));
app.use(routes);

export default app;
