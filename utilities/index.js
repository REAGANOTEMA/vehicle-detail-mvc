/**
 * Author: Reagan Otema
 * Wrap vehicle data in HTML
 */
function buildVehicleHTML(vehicle) {
  return `
    <h1>${vehicle.make} ${vehicle.model}</h1>
    <div class="vehicle-detail">
      <img src="${vehicle.image_url}" alt="${vehicle.make} ${vehicle.model}" class="vehicle-image">
      <div class="vehicle-info">
        <p><strong>Year:</strong> ${vehicle.year}</p>
        <p><strong>Price:</strong> $${Number(vehicle.price).toLocaleString()}</p>
        <p><strong>Mileage:</strong> ${Number(vehicle.mileage).toLocaleString()} miles</p>
        <p>${vehicle.description}</p>
      </div>
    </div>
  `;
}

module.exports = { buildVehicleHTML };
