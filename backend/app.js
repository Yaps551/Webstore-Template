const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Cors options
var corsOptions = {
    origin: '*',
    methods: 'GET, POST, PUT, PATCH, DELETE',
    allowedHeaders: 'Content-Type, Authorization'
};

// Cors options middleware
app.use(cors(corsOptions));

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Test route
app.get('/', (req, res, next) => {
    res.json({message: "Welcome to the API"});
});

// Routes

const port = process.env.PORT;
app.listen(port, () => {
    console.log('API server running on port: ' + port);
});
