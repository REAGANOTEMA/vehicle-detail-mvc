/**
 * Author: Reagan Otema
 */
const { getVehicleById } = require('../models/inventory-model');
const { buildVehicleHTML } = require('../utilities/index');

const vehicleDetail = async (req, res, next) => {
  try {
    const vehicleId = req.params.id;
    const vehicle = await getVehicleById(req.app.locals.db, vehicleId);
    if (!vehicle) throw new Error('Vehicle not found');
    const html = buildVehicleHTML(vehicle);
    res.render('inventory/vehicle-detail', { html });
  } catch (err) {
    next(err);
  }
};

const triggerError = (req, res, next) => {
  next(new Error('This is an intentional 500 error'));
};

module.exports = { vehicleDetail, triggerError };
