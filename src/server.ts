//const express = require('express'); // CommonJS CJS
import express from 'express'; // ES6 Module ESM (ECMAScript Module)
import 'dotenv/config';
import router from './router';
import { connect } from './config/db';

const app = express();
connect();

// Leer el body de las peticiones
app.use(express.json());

app.use('/', router);

export default app;