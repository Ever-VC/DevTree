//const express = require('express'); // CommonJS CJS
import express from 'express'; // ES6 Module ESM (ECMAScript Module)
import router from './router';

const app = express();

app.use('/', router);

export default app;