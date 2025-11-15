/**
 * Author: Reagan Otema
 * Wrap vehicle data in HTML for the detail page
 * Ensures image names are always safe and correctly loaded.
 */

function buildVehicleHTML(vehicle) {
  // Normalize image filename safely
  let imageFile = "default-vehicle.jpg";

  if (vehicle.image) {
    // Remove spaces, force lowercase, keep extension intact
    imageFile = vehicle.image.trim().toLowerCase();
  }

  return `
    <h1>${vehicle.make} ${vehicle.model}</h1>
    <div class="vehicle-detail">
      <img src="/images/vehicles/${imageFile}" alt="${vehicle.make} ${vehicle.model}" class="vehicle-image">
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
