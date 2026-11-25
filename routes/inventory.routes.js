const express = require('express');
const router = express.Router();
const controller = require('../controllers/inventory.controller');

router.get('/provided-inventory', controller.getProvidedInventory);

module.exports = router;