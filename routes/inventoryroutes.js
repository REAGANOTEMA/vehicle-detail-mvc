/**
 * Author: Reagan Otema
 * Inventory routes
 */

const express = require('express');
const router = express.Router();

// Correct import (your file is lowercase)
const inventoryController = require('../controllers/inventorycontroller');

// Route to show vehicle detail
router.get('/vehicle/:id', inventoryController.vehicledetail);

// Route to trigger intentional 500 error
router.get('/trigger-error', inventoryController.triggerError);

module.exports = router;
