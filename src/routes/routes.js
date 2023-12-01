const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/signUp', UserController.createUser);

module.exports = router;