// import express
const express = require('express');

// create an express router object
const routes = express.Router();

// here i will create an user list just to train (OBVIOUSLY A REAL SYSTEM WOULD NEVER DO THIS!)
const users = [{
    id: 1,
    name: 'feh',
    email: 'googleemail@gmail.com',
    password: '123456789'
}];

// login route, POST method
routes.post('/login', (req, res) => {
    // defines two constant's that receives value from server body request
    const { email, password } = req.body;

    // try find if a passed user is valid
    const user = users.find(user => user.email === email && user.password === password);

    // check if is valid and return status code 200 and the user
    if (user) {
        return res.status(200).json({ message: 'Logged ✔️' });
    };

    return res.status(401).json({ message: 'Invalid credentials ❌' });
});
/* 
curl -X POST http://localhost:3000/login \
-H "Content-Type: application/json" \
-d '{"email": "googleemail@gmail.com", "password": "123456789"}'
*/

module.exports = routes;