const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const connect = require('./config/db');

const app = express();

//MongoDB Connection
connect();

app.use(bodyParser.json());

app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log('Your App is Running on PORT: ', PORT);
});
