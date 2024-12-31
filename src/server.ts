//const express = require('express'); // CommonJS CJS
import express from 'express'; // ES6 Module ESM (ECMAScript Module)

const app = express();

// Routing
app.get('/', (req, res) => {
    res.send('Hello World!');
});

export default app;