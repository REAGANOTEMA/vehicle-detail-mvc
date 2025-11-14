const db = require("../db/connection"); // your database connection

async function getVehicleById(vehicleId) {
  const sql = "SELECT * FROM inventory WHERE vehicle_id = ?";
  try {
    const [rows] = await db.execute(sql, [vehicleId]);
    return rows[0];
  } catch (err) {
    throw new Error("Database query failed: " + err.message);
  }
}

module.exports = { getVehicleById };
