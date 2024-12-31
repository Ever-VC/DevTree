//const express = require('express'); // CommonJS CJS
import express from 'express'; // ES6 Module ESM (ECMAScript Module)

const app = express();

// Routing
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});