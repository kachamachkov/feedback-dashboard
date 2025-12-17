const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes')

const app = express();

// TODO: refactor to only allow a specific host port, when I know it
app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb://localhost:27017/feedback')
    .then(() => {
        console.log('Connected to the database.');
        app.listen(3000, () => console.log('Server is listening on port 3000...'))
    })
    .catch(() => {
        console.log('Connection to the database failed.');
    });
