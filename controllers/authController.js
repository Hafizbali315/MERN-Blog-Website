exports.registerUser = (req, res) => {
	const { name, email, password } = req.body;
	res.send(req.body);
};
