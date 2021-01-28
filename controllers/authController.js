const User = require('../modals/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.signup = async (req, res) => {
	const { name, email, password } = req.body;

	try {
		const checkUser = await User.findOne({ email });
		if (checkUser) {
			res.status(400).json({ errors: [{ msg: 'User already exits' }] });
		}
		const hashPassword = await bcrypt.hash(password, 10);

		try {
			const user = await User.create({ name, email, password: hashPassword });
			const token = await jwt.sign({ user }, process.env.JWT_SECRET, {
				expiresIn: '14d',
			});

			res.status(200).json({ msg: 'Your Account has been created', token });
		} catch (error) {
			res.status(500).json({ errors: error });
		}
	} catch (error) {
		res.status(500).json({ errors: error });
	}
};
