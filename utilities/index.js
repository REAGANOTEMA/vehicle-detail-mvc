/**
 * Author: Reagan Otema
 * Wrap vehicle data in HTML for the detail page
 */

function buildVehicleHTML(vehicle) {
  // Map image names to local images folder
  const imageMap = {
    hummer: 'hummer.jpg',
    survan: 'survan.jpg',
    wrangler: 'wrangler.jpg',
    'fire-truck': 'fire-truck.jpg',
    'dog-car': 'dog-car.jpg'
  };

  // Determine the image file to use (default if missing)
  const imageFile = imageMap[vehicle.image?.toLowerCase()] || 'default-vehicle.jpg';

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
