const { getVehicleById } = require('../models/inventory-model');
const { vehicleDetailView } = require('../utils/index');

async function vehicleDetail(req, res, next) {
    try {
        const vehicleId = req.params.id;
        const vehicle = await getVehicleById(vehicleId);

        if (!vehicle) {
            return res.status(404).render('errors/error', { message: 'Vehicle not found' });
        }

        const html = vehicleDetailView(vehicle);
        res.send(html);

    } catch (err) {
        next(err);
    }
}

module.exports = { vehicleDetail };
