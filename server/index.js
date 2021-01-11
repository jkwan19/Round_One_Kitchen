const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const apiPort = 3000;

const db = require('../database');
const reviewRouter = require('./reviews-router');

app.use(cors())
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', reviewRouter);
app.use('/', express.static(path.join(__dirname, '../dist')))


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))