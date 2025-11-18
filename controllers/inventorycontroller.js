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

    // Fetch from database
    const vehicle = await getVehicleById(req.app.locals.db, vehicleId);

    if (!vehicle) {
      return res.status(404).render('error', { 
        message: 'Vehicle not found', 
        status: 404 
      });
    }

    const html = buildVehicleHTML(vehicle);

    res.render('inventory/vehicle-detail', { vehicle, html });
  } catch (err) {
    next(err);
  }
};

/**
 * Intentional 500 error trigger
 */
const triggerError = (req, res, next) => {
  const error = new Error('This is an intentional 500 error');
  error.status = 500;
  next(error);
};
const { getAllVehicles, getVehicleById } = require('../models/inventory-model');
const { buildVehicleHTML } = require('../utilities/index');

const inventoryList = async (req, res, next) => {
  try {
    const vehicles = await getAllVehicles(req.app.locals.db);

    res.render('inventory/list', { vehicles });
  } catch (err) {
    next(err);
  }
};
module.exports = { vehicleDetail, triggerError, inventoryList };

