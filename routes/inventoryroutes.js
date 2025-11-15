/**
 * Author: Reagan Otema
 * Inventory routes
 */

const express = require('express');
const router = express.Router();

// Import the controller
const inventoryController = require('../controllers/inventorycontroller');

// Route to show vehicle detail
router.get('/vehicle/:id', inventorycontroller.vehicle-detail);

// Route to trigger intentional 500 error
router.get('/trigger-error', inventorycontroller.triggerError);

module.exports = router;
