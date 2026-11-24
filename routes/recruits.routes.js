const express = require('express');
const router = express.Router();
const controller = require('../controllers/recruits.controller');

// префікс /api/recruits додасться в головному index.js
router.get('/appoinment-date', controller.getByAppointmentDate);
router.get('/missed-sessions', controller.getByNMissedSessions);

module.exports = router;