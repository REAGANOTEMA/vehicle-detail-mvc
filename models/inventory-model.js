/**
 * Author: Reagan Otema
 */
const getVehicleById = async (db, id) => {
  const query = {
    name: 'fetch-vehicle',
    text: 'SELECT * FROM vehicles WHERE id = $1',
    values: [id]
  };
  const res = await db.query(query);
  return res.rows[0];
};

module.exports = { getVehicleById };
