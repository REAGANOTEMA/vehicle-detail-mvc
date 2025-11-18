/**
 * Author: Reagan Otema
 * Inventory routes
 */

const express = require('express');
const router = express.Router();

// Import controller (filename does NOT matter)
const inventoryController = require('../controllers/inventorycontroller');

// Vehicle detail route
router.get('/vehicle/:id', inventoryController.vehicleDetail);

// Trigger 500 error route
router.get('/trigger-error', inventoryController.triggerError);

module.exports = router;
