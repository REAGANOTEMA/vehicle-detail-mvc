const express = require('express');
const router = express.Router();
const { vehicleDetail } = require('../controllers/inventorycontroller');


// Vehicle detail page
router.get('/inventory/:id', vehicleDetail);

// Footer-based error test
router.get('/inventory/error-test', (req, res) => {
    throw new Error('This is a test error from the footer.');
});

module.exports = router;
