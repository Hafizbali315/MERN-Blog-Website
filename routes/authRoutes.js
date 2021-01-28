const express = require('express');
const { registerUser } = require('../controllers/authController');
const { validateSignupRequest, isRequestValidated } = require('../validators/authValidator');
const router = express.Router();

router.post('/register', validateSignupRequest, isRequestValidated, registerUser);

module.exports = router;
