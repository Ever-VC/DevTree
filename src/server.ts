import express from 'express'; // ES6 Module ESM (ECMAScript Module)
import cors from 'cors';
import 'dotenv/config';
import router from './router';
import { connect } from './config/db';
import { corsConfig } from './config/cors';

connect();

const app = express();

// Cors
app.use(cors(corsConfig));

// Leer el body de las peticiones
app.use(express.json());

app.use('/', router);

export default app;