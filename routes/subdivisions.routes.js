const express = require('express');
const router = express.Router();
const controller = require('../controllers/subdivisions.controller');

router.get('/max-recruit-count', controller.getByMaxRecruitCount);
router.get('/intersubdivisional-trainings', controller.getBySomeTrainings);
router.get('/max-avg-mark', controller.getByMaxAvgMarks);

module.exports = router;