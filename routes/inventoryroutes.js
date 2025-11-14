/**
 * Author: Reagan Otema
 * Inventory routes
 */

const express = require('express');
const router = express.Router();

// Import the controller (case-sensitive)
const inventoryController = require('../controllers/inventorycontroller');

// Route to show vehicle detail
router.get('/vehicle/:id', inventoryController.vehicleDetail);

// Route to trigger intentional 500 error
router.get('/trigger-error', inventoryController.triggerError);

module.exports = router;
