const express = require('express');
const { signup } = require('../controllers/authController');
const { validateSignupRequest, isRequestValidated } = require('../validators/authValidator');
const router = express.Router();

router.post('/register', validateSignupRequest, isRequestValidated, signup);

module.exports = router;
