const express = require('express');
const router = express.Router();
const controller = require('../controllers/sessions.controller');

router.get('/in-certain-center', controller.getByProvidedInCertainCenter);

module.exports = router;