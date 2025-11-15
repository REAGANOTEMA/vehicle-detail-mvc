/**
 * Author: Reagan Otema
 * Model functions for vehicles table
 */

const getVehicleById = async (db, id) => {
  try {
    const query = {
      name: 'fetch-vehicle',
      text: `
        SELECT id, make, model, year, price, mileage, image, description
        FROM vehicles
        WHERE id = $1
      `,
      values: [id],
    };

    const result = await db.query(query);

    // If no vehicle is found, return null
    if (result.rows.length === 0) return null;

    // Return the vehicle object
    return result.rows[0];
  } catch (err) {
    console.error('Error fetching vehicle by ID:', err);
    throw err;
  }
};

module.exports = { getVehicleById };
