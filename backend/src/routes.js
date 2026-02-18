// import express
const express = require('express');

// create an express router object
const routes = express.Router();

// login route, POST method
routes.post('/login', (req, res) => {
    res.send('Login endpoint 📁');
}); // $curl -i -X POST http://localhost:3000/login

module.exports = routes;