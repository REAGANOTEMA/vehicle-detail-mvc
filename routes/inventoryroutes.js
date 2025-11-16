/**
 * Author: Reagan Otema
 * Inventory routes
 */

const express = require('express');
const router = express.Router();

// Correct import (matches lowercase filename)
const inventoryController = require('../controllers/inventorycontroller');

// Vehicle detail route
router.get('/vehicle/:id', inventoryController.vehicledetail);

// Trigger 500 error route
router.get('/trigger-error', inventoryController.triggerError);

module.exports = router;
