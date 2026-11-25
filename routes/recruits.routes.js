const express = require('express');
const router = express.Router();
const controller = require('../controllers/recruits.controller');

// префікс /api/recruits додасться в головному index.js
router.get('/appoinment-date', controller.getByAppointmentDate);
router.get('/min-3-courses', controller.getMin3Courses);
router.get('/max-mark', controller.getByMaxMark);
router.get('/in-few-subdivisions', controller.getThatInFewSubdivision);
router.get('/max-trainings-count', controller.getByMaxTrainingCount);
router.get('/missed-sessions', controller.getByNMissedSessions);

module.exports = router;