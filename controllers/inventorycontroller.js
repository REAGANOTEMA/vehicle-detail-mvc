/**
 * Author: Reagan Otema
 * Controller for vehicle detail page and error handling
 */

const { getVehicleById } = require('../models/inventory-model');
const { buildVehicleHTML } = require('../utilities/index');

/**
 * Render the detail view for a single vehicle
 */
const vehicleDetail = async (req, res, next) => {
  try {
    const vehicleId = req.params.id;

    // Fetch vehicle from database using prepared statement
    const vehicle = await getVehicleById(req.app.locals.db, vehicleId);

    if (!vehicle) {
      // Vehicle not found – render 404 error view
      return res.status(404).render('error', { 
        message: 'Vehicle not found', 
        status: 404 
      });
    }

    // Build HTML for the vehicle and pass to EJS view
    const html = buildVehicleHTML(vehicle);

    res.render('inventory/vehicle-detail', { vehicle, html });
  } catch (err) {
    // Forward error to Express error handler
    next(err);
  }
};

/**
 * Intentional 500 error trigger for testing middleware
 */
const triggerError = (req, res, next) => {
  const error = new Error('This is an intentional 500 error');
  error.status = 500;
  next(error);
};

module.exports = { vehicleDetail, triggerError };
