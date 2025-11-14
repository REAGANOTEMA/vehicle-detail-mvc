/**
 * Author: Reagan Otema
 * Wrap vehicle data in HTML for Vehicle Detail Page
 */

function buildVehicleHTML(vehicle) {
  // Ensure the image points to the public folder path
  const imagePath = `/images/vehicles/${vehicle.image}`;

  return `
    <div class="vehicle-detail-container">
      <h1 class="vehicle-title">${vehicle.make} ${vehicle.model}</h1>
      <div class="vehicle-detail">
        <img src="${imagePath}" alt="${vehicle.make} ${vehicle.model}" class="vehicle-image">
        <div class="vehicle-info">
          <p><strong>Year:</strong> ${vehicle.year}</p>
          <p><strong>Price:</strong> $${Number(vehicle.price).toLocaleString()}</p>
          <p><strong>Mileage:</strong> ${Number(vehicle.mileage).toLocaleString()} miles</p>
          <p class="vehicle-description">${vehicle.description}</p>
        </div>
      </div>
    </div>
  `;
}

module.exports = { buildVehicleHTML };
