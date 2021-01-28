const { body, validationResult } = require('express-validator');

exports.validateSignupRequest = [
	body('name').notEmpty().withMessage('Name is Required'),
	body('email').isEmail().withMessage('Valid Email is required'),
	body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 character long'),
];

exports.isRequestValidated = (req, res, next) => {
	const errors = validationResult(req);
	if (errors.array().length > 0) {
		return res.status(400).json({ error: errors.array() });
	}
	next();
};
