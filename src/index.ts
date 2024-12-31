//const express = require('express'); // CommonJS CJS
import express from 'express'; // ES6 Module ESM (ECMAScript Module)

const app = express();

// Routing
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log('Server is running on port ' + port + '...');
});