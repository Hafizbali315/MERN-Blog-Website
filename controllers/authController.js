const User = require('../modals/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateJwtToken = (user) => {
	return jwt.sign({ user }, process.env.JWT_SECRET, {
		expiresIn: '14d',
	});
};

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
			const token = generateJwtToken(user);

			return res.status(200).json({ msg: 'Your Account has been created', token });
		} catch (error) {
			return res.status(500).json({ errors: error });
		}
	} catch (error) {
		res.status(500).json({ errors: error });
	}
};

exports.signin = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });

		if (user) {
			const isPassword = await bcrypt.compare(password, user.password);

			if (isPassword) {
				const token = generateJwtToken(user);

				return res.status(200).json({ message: 'You have login successfully!', token });
			} else {
				return res.status(401).json({ error: [{ message: 'Password is incorrect!' }] });
			}
		} else {
			return res.status(404).json({ error: [{ message: 'Email is incorrect!' }] });
		}
	} catch (error) {
		return res.status(500).json({ errors: error });
	}
};
