/**
 * Author: Reagan Otema
 */
const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventorycontroller');

router.get('/vehicle/:id', inventoryController.vehicleDetail);
router.get('/trigger-error', inventoryController.triggerError);

module.exports = router;
