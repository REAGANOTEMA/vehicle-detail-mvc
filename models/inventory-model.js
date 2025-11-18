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
    return result.rows[0] || null;
  } catch (err) {
    console.error('Error fetching vehicle by ID:', err);
    throw err;
  }
};

const getAllVehicles = async (db) => {
  try {
    const result = await db.query(`
      SELECT id, make, model, year, price, mileage, image
      FROM vehicles
      ORDER BY id ASC
    `);
    return result.rows;
  } catch (err) {
    console.error("Error fetching all vehicles:", err);
    throw err;
  }
};

module.exports = { getVehicleById, getAllVehicles };
