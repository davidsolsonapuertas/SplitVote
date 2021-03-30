const express = require('express');

const PORT = 5000;

const app = express();
const cors = require('cors');
// const db = require('./model');
const router = require('./router');

app.use(express.json());
app.use(cors());

app.use('/', router);
app.use('/static', express.static('public'));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
