const express = require('express');
const cors = require('cors');

const routes = require('./routes')

const app = express();

// TODO: refactor to only allow a specific host port, when I know it
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log('Server is listening on port 3000...'))