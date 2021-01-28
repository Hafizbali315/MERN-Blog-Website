const express = require('express');
require('dotenv').config();

const connect = require('./config/db');

const app = express();

//MongoDB Connection
connect();

app.get('/', (req, res) => {
	res.send('Hello MERN Blog');
});

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
	console.log('Your App is Running on PORT: ', PORT);
});
