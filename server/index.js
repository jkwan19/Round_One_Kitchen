const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const apiPort = 8080;

const db = require('../database');
const reviewRouter = require('./reviews-router');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', reviewRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))