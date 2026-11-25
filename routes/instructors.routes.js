const express = require('express');
const router = express.Router();
const controller = require('../controllers/instructors.controller');

router.get('/provide-5-sessions', controller.getByProvided5Sessions);
router.get('/provide-for-few-subdivisions', controller.getByProvidedTrainingForFewSubdivision);

module.exports = router;