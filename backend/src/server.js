// express importations
const express = require('express');
const app = express();

// defines a server ip & port
const ip = '127.0.0.1';
const port = 3000;

// first route
app.get('/', (req, res) => {
    res.send('Try /login');
}); // $curl -i http://localhost:3000

// importing routes to the main server
const routes = require('./routes');
// define express to use the routes js file we made
app.use(routes);

// define json format as a default format to express
app.use(express.json());

// starts to be online the server
app.listen(port, () => {
    console.log(`Server running at http://${ip}:${port}`);
});