const express = require('express');
const router = express.Router();
const controller = require('../controllers/marks.controller');

router.get('/avg-for-instructor', controller.getAvgMarkForInstructor);

module.exports = router;