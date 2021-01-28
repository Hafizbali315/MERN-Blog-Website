const mongoose = require('mongoose');
require('dotenv').config();

const connect = async () => {
	try {
		const response = await mongoose.connect(process.env.URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});

		console.log('Database Connected Successfully');
	} catch (error) {
		console.log(error);
	}
};

module.exports = connect;
