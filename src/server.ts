//const express = require('express'); // CommonJS CJS
import express from 'express'; // ES6 Module ESM (ECMAScript Module)
import router from './router';

const app = express();

// Leer el body de las peticiones
app.use(express.json());

app.use('/', router);

export default app;