/**
 * Author: Reagan Otema
 * Controller for vehicle pages and error handling
 */

const { getAllVehicles, getVehicleById } = require('../models/inventory-model');
const { buildVehicleHTML } = require('../utilities/index');

/**
 * Show inventory list
 */
const inventoryList = async (req, res, next) => {
  try {
    const vehicles = await getAllVehicles(req.app.locals.db);
    res.render('inventory/list', { vehicles });
  } catch (err) {
    next(err);
  }
};

/**
 * Show vehicle detail page
 */
const vehicleDetail = async (req, res, next) => {
  try {
    const vehicleId = req.params.id;
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
 * Trigger 500 error
 */
const triggerError = (req, res, next) => {
  const error = new Error('This is an intentional 500 error');
  error.status = 500;
  next(error);
};

module.exports = { inventoryList, vehicleDetail, triggerError };
