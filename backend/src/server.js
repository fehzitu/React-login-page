// express importations
const express = require('express');
const cors = require('cors');
const app = express();

// defines a server ip & port
const ip = '127.0.0.1';
const port = 3000;

// define json format as a default format to express (remember that we must declare this before calling any route)
app.use(express.json());

// cors is used to receive data from frontend
app.use(cors());

// importing routes to the main server
const routes = require('./routes');
// define express to use the routes js file we made
app.use(routes);

// first route
app.get('/', (req, res) => {
    res.send('Try /login with "POST" method');
}); // $curl -i http://localhost:3000

// starts to be online the server
app.listen(port, () => {
    console.log(`Server running at http://${ip}:${port}`);
});