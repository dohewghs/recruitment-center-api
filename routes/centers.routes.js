const express = require('express');
const router = express.Router();
const controller = require('../controllers/centers.controller');

router.get('/last-year', controller.getByProvidedForLastYear);
router.get('/max-equipment', controller.getByProvidedMaxEquipment);

module.exports = router;